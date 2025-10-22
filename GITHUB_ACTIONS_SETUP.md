# GitHub Actions Setup for Google Reviews

This setup automatically fetches your Google reviews daily and updates your static website.

## 🚀 Setup Instructions

### 1. Push to GitHub
```bash
git add .
git commit -m "Add GitHub Actions for Google Reviews"
git push origin main
```

### 2. Add Secrets to GitHub Repository

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

#### Required Secrets:
- **`GOOGLE_PLACES_API_KEY`**: Your Google Places API key
- **`GOOGLE_PLACE_ID`**: Your Google Place ID

#### Optional Secrets (for Vercel deployment):
- **`VERCEL_TOKEN`**: Your Vercel token
- **`ORG_ID`**: Your Vercel organization ID  
- **`PROJECT_ID`**: Your Vercel project ID

### 3. How It Works

1. **Daily Schedule**: Runs every day at 6 AM UTC
2. **Fetches Reviews**: Gets latest reviews from Google Places API
3. **Updates JSON**: Saves reviews to `src/data/reviews.json`
4. **Commits Changes**: Automatically commits if reviews changed
5. **Deploys**: Triggers deployment (if Vercel secrets are set)

### 4. Manual Trigger

You can manually trigger the workflow:
- Go to Actions tab in GitHub
- Click "Update Google Reviews"
- Click "Run workflow"

### 5. Static Site Deployment

The reviews are now stored in `src/data/reviews.json` and loaded statically. This works with:

- ✅ **Vercel** (recommended)
- ✅ **Netlify**
- ✅ **GitHub Pages**
- ✅ **Any static hosting**

### 6. Customization

#### Change Schedule:
Edit `.github/workflows/update-reviews.yml`:
```yaml
schedule:
  - cron: '0 6 * * *'  # Daily at 6 AM UTC
  # - cron: '0 */6 * * *'  # Every 6 hours
  # - cron: '0 0 * * 0'    # Weekly on Sunday
```

#### Change Timezone:
```yaml
- cron: '0 14 * * *'  # 6 AM EST (UTC-8)
```

### 7. Monitoring

Check the Actions tab in GitHub to see:
- ✅ When reviews were last updated
- ✅ If there were any errors
- ✅ How many reviews were fetched

### 8. Troubleshooting

#### Common Issues:
1. **API Key Invalid**: Check your Google Places API key
2. **Place ID Wrong**: Verify your Google Place ID
3. **No Reviews**: Check if your business has reviews on Google
4. **Deployment Failed**: Check Vercel secrets if using Vercel

#### Check Logs:
- Go to Actions → Update Google Reviews → Click on latest run
- Check the "Fetch Google Reviews" step for errors

## 🎉 Benefits

- ✅ **Free**: No monthly costs
- ✅ **Automatic**: Updates daily without manual work
- ✅ **Static**: Works with any static hosting
- ✅ **Real-time**: Fresh reviews every day
- ✅ **Reliable**: GitHub Actions is very stable

Your Google reviews will now automatically update daily! 🌟
