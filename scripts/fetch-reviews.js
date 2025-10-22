const fs = require('fs');
const path = require('path');

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  
  if (!apiKey || !placeId) {
    console.error('Missing API key or Place ID');
    process.exit(1);
  }

  try {
    console.log('Fetching Google reviews...');
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Filter and sort reviews (only 4-5 stars, latest first, max 20)
    const allReviews = data.result.reviews || [];
    const filteredReviews = allReviews
      .filter(review => review.rating >= 4) // Only 4 and 5 star reviews
      .sort((a, b) => b.time - a.time) // Sort by newest first
      .slice(0, 20) // Take only the latest 20
      .map(review => {
        // Normalize date descriptions - anything older than a month becomes "a month ago"
        const timeDescription = review.relative_time_description.toLowerCase();
        if (timeDescription.includes('2 months') || 
            timeDescription.includes('3 months') || 
            timeDescription.includes('4 months') || 
            timeDescription.includes('5 months') || 
            timeDescription.includes('6 months') || 
            timeDescription.includes('7 months') || 
            timeDescription.includes('8 months') || 
            timeDescription.includes('9 months') || 
            timeDescription.includes('10 months') || 
            timeDescription.includes('11 months') || 
            timeDescription.includes('year')) {
          return {
            ...review,
            relative_time_description: 'a month ago'
          };
        }
        return review;
      });

    // Calculate average rating from filtered reviews
    const avgRating = filteredReviews.length > 0 
      ? filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length
      : data.result.rating || 0;

    // Save reviews data
    const reviewsData = {
      lastUpdated: new Date().toISOString(),
      overallRating: Math.round(avgRating * 10) / 10, // Round to 1 decimal
      totalReviews: data.result.user_ratings_total || 0,
      reviews: filteredReviews
    };

    const filePath = path.join(dataDir, 'reviews.json');
    fs.writeFileSync(filePath, JSON.stringify(reviewsData, null, 2));
    
    console.log(`✅ Reviews updated successfully!`);
    console.log(`📊 Overall rating: ${reviewsData.overallRating}`);
    console.log(`📝 Total reviews: ${reviewsData.totalReviews}`);
    console.log(`💬 4-5 star reviews shown: ${reviewsData.reviews.length}`);
    console.log(`⭐ Filtered from ${allReviews.length} total reviews`);
    console.log(`📅 Date descriptions normalized (older reviews show as "a month ago")`);
    
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message);
    process.exit(1);
  }
}

fetchGoogleReviews();
