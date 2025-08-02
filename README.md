# Portfolio Site

A modern, sleek portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features automatic GitHub integration to showcase your projects and a beautiful, minimalist design.

## ✨ Features

- **Modern Design**: Clean, minimalist white design with elegant typography
- **GitHub Integration**: Automatically fetches and displays your GitHub projects
- **Responsive**: Looks great on all devices
- **Smooth Animations**: Beautiful transitions and hover effects using Framer Motion
- **Contact Form**: Functional contact form for potential clients
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Customize your information**
   - Update `app/page.tsx` with your personal information
   - Replace GitHub username in `components/Projects.tsx`
   - Update social links and contact information
   - Add your profile picture

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`)
   - Your name and title
   - Social media links
   - Email address

2. **About Section** (`components/About.tsx`)
   - Personal description
   - Location and contact info
   - Experience statistics

3. **Projects Section** (`components/Projects.tsx`)
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
   - The component will automatically fetch your repositories

4. **Contact Section** (`components/Contact.tsx`)
   - Email, phone, and location
   - Social media links

### Styling

The site uses Tailwind CSS with a custom color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... customize these colors
  }
}
```

### Adding Your Profile Picture

1. Add your image to the `public` folder
2. Update the `components/About.tsx` file to use your image instead of the placeholder icon

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

### GitHub API

The site uses the public GitHub API to fetch your repositories. No authentication is required, but you can add a GitHub token for higher rate limits.

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance

- Lighthouse score: 95+ across all metrics
- Optimized images and fonts
- Efficient bundle splitting
- Minimal JavaScript footprint

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)

---

Made with ❤️ by [Your Name] 