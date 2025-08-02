# Deployment Guide

This guide will help you deploy your portfolio site to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio site"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any environment variables you need

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain
- Go to Project Settings → Domains
- Add your custom domain
- Follow the DNS configuration instructions

## 🌐 Netlify

### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Node Version**: 18.x

### Configuration:
Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🐳 Docker

### Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run:
```bash
docker build -t portfolio-site .
docker run -p 3000:3000 portfolio-site
```

## ☁️ AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select the main branch

2. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   - Add any required environment variables

## 🚢 Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will auto-detect Next.js

2. **Deploy**
   - Railway will automatically deploy your app
   - Get a public URL instantly

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images before uploading

2. **Enable Compression**
   - Most platforms handle this automatically
   - For custom servers, enable gzip/brotli

3. **Caching**
   - Set up proper cache headers
   - Use CDN for static assets

### Monitoring:

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics**
3. **Lighthouse CI** for performance monitoring

## 🔒 Security

1. **Environment Variables**
   - Never commit sensitive data
   - Use platform-specific secret management

2. **HTTPS**
   - Most platforms provide HTTPS automatically
   - Ensure all external links use HTTPS

3. **Content Security Policy**
   - Add CSP headers if needed
   - Monitor for security vulnerabilities

## 📱 Mobile Optimization

The site is already mobile-optimized, but verify:

1. **Viewport Meta Tag** ✅
2. **Responsive Images** ✅
3. **Touch Targets** ✅
4. **Performance on 3G** ✅

## 🔄 Continuous Deployment

### GitHub Actions Example:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Images Not Loading**
   - Verify image domains in `next.config.js`
   - Check image paths and formats

3. **GitHub API Issues**
   - Verify GitHub username is correct
   - Check API rate limits
   - Ensure repository is public

4. **Styling Issues**
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify CSS imports

### Support:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Your portfolio site should now be live and automatically updating from GitHub! 🎉 