# Directory WordPress Headless

Business directory template using WordPress as headless CMS with Next.js frontend - designed for multi-market directory deployments.

## Architecture

- **Frontend:** Next.js with TypeScript and Tailwind CSS
- **Backend CMS:** WordPress (Headless)
- **Database:** WordPress MySQL/MariaDB
- **API:** WordPress REST API
- **Deployment:** Vercel (Frontend) + WordPress hosting

## Features

- 🏢 Business directory listings
- 📊 WordPress admin dashboard
- 📁 CSV import for bulk business data
- 🎨 Customizable branding per market
- 📱 Mobile-responsive design
- 🔍 Search and filtering
- 📍 Location-based directories

## Multi-Market Deployment

This template is designed to be deployed multiple times for different markets:

- **Melbourne Restaurants** → melbeats.com
- **Sydney Services** → sydneyservices.com.au  
- **Brisbane Cafes** → brisbanecafes.com

Each deployment gets:
- Own WordPress instance
- Own domain and branding
- Own business data via CSV import
- Own admin dashboard

## Development Setup

1. **WordPress Setup**
   - Install WordPress with custom post types
   - Configure REST API
   - Install required plugins (ACF, CSV import)

2. **Frontend Setup**
   ```bash
   npm install
   npm run dev
   ```

3. **Environment Variables**
   ```bash
   WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
   ```

## Original Template Source

Based on: [Directory-Website-Component-Blueprint](https://github.com/Bionic-Dongle/Directory-Website-Component-Blueprint)

## Status

🚧 **In Development** - Converting from database-based to WordPress headless CMS architecture.

## Next Steps

- [ ] Copy original template files
- [ ] Set up WordPress configuration
- [ ] Reconfigure API layer for WordPress
- [ ] Test multi-agent development approach
- [ ] Deploy first market directory