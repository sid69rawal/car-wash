const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/images/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
  console.log('✅ Created gallery directory');
}

// Gallery image URLs
const imageUrls = [
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-24.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-23.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-22.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-21.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-20.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-19.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-18.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-11.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-12.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-15.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-2.jpg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/2-2-1.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-25.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-37.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-38.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-39.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-41.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-43.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-45.jpeg',
  'https://maximumcardetailing.ca/wp-content/uploads/2023/06/rsw_1300h_800-50.jpeg',
];

// Function to download a single image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(galleryDir, filename);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skipped (already exists): ${filename}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if download failed
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log(`📥 Downloading ${imageUrls.length} gallery images...\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const filename = `gallery-${i + 1}${path.extname(url)}`;
    
    try {
      await downloadImage(url, filename);
      successCount++;
    } catch (error) {
      console.error(`❌ Error downloading ${filename}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n✨ Download complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  if (errorCount > 0) {
    console.log(`   ❌ Failed: ${errorCount}`);
  }
  console.log(`\n📁 Images saved to: ${galleryDir}`);
}

// Run the download
downloadAllImages().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

