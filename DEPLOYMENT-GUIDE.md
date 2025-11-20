# Deployment Guide

This guide provides detailed instructions for deploying the Healthcare Medicine Catalog application to various platforms.

## Table of Contents

- [Deployment with Vercel (Recommended)](#deployment-with-vercel-recommended)
- [Deployment with Netlify](#deployment-with-netlify)
- [Deployment with GitHub Pages](#deployment-with-github-pages)
- [Deployment to a Custom Server](#deployment-to-a-custom-server)

## Deployment with Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications as it provides seamless integration and optimal performance.

### Prerequisites

1. A GitHub account
2. A Vercel account (you can sign up with your GitHub account)

### Steps

1. Go to [vercel.com](https://vercel.com/) and sign up/sign in
2. Click "New Project"
3. Import your GitHub repository:
   - Click "Continue with GitHub"
   - Install the Vercel GitHub app if prompted
   - Select the `healthcare-medicine-catalog` repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: Leave as is
   - Build and Output Settings:
     - Build Command: `pnpm build`
     - Output Directory: `.next`
     - Install Command: `pnpm install`
5. Click "Deploy"
6. Wait for the deployment to complete (usually takes 1-2 minutes)
7. Your application will be available at a `.vercel.app` URL

### Environment Variables

This application doesn't require any environment variables for basic functionality, but you can add them in the Vercel dashboard if needed:
1. Go to your project settings in Vercel
2. Navigate to the "Environment Variables" section
3. Add any required variables

### Custom Domain

To use a custom domain:
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Deployment with Netlify

Netlify is another excellent option for deploying static sites and Next.js applications.

### Steps

1. Sign up for a [Netlify account](https://netlify.com/) if you don't have one
2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build your project locally:
   ```bash
   pnpm build
   ```
4. Deploy using Netlify CLI:
   ```bash
   netlify deploy
   ```
5. Follow the prompts to select your build directory (`.next`) and deploy

## Deployment with GitHub Pages

GitHub Pages is a free hosting service for static websites.

### Prerequisites

Install the gh-pages package:
```bash
pnpm add -D gh-pages
```

### Steps

1. Add deployment scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "export": "next export",
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

2. Deploy the application:
   ```bash
   pnpm deploy
   ```

3. Configure GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Select "gh-pages" branch as the source
   - Click "Save"

## Deployment to a Custom Server

To deploy to a custom server, you'll need to build the application and serve it with a Node.js server.

### Steps

1. Build the application:
   ```bash
   pnpm build
   ```

2. The build output will be in the `.next` directory

3. Start the production server:
   ```bash
   pnpm start
   ```

4. For production deployment, consider using a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "healthcare-catalog" -- start
   ```

## Troubleshooting

### Build Issues

If you encounter build issues:
1. Ensure all dependencies are installed: `pnpm install`
2. Check that Node.js version is 18 or higher
3. Clear the build cache: `pnpm clean` (if available) or delete `.next` directory

### Common Deployment Errors

1. **Module not found errors**: Ensure all dependencies are correctly listed in `package.json`
2. **Build failures**: Check the build logs for specific error messages
3. **Runtime errors**: Verify environment variables and configuration

## Support

For additional help with deployment, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)