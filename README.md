# April's Valentine Quest 💕

A special Valentine's Day message for April Mashaba.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local Development

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/AprilMasipa/april-s-valentine-quest.git

# Step 2: Navigate to the project directory
cd april-s-valentine-quest

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Deploying to Cloudflare Pages

### Prerequisites
- A Cloudflare account (free tier works)
- Your GitHub repository connected to Cloudflare

### Deployment Steps

1. **Build Configuration**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leave empty)

2. **Environment Variables** (if needed)
   - Go to your Cloudflare Pages project settings
   - Add any required environment variables in the "Environment variables" section

3. **Deploy via Cloudflare Dashboard**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to "Workers & Pages" → "Create application" → "Pages" → "Connect to Git"
   - Select your GitHub repository: `AprilMasipa/april-s-valentine-quest`
   - Configure build settings:
     - Framework preset: `Vite`
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

4. **Automatic Deployments**
   - Cloudflare Pages will automatically deploy on every push to your main branch
   - You can also trigger manual deployments from the dashboard

5. **Custom Domain** (Optional)
   - In your Cloudflare Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain name and follow the DNS configuration instructions

### Alternative: Deploy via Wrangler CLI

```sh
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=april-s-valentine-quest
```

Your site will be available at: `https://april-s-valentine-quest.pages.dev` (or your custom domain if configured)
