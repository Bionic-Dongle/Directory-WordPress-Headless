# Multi-Market Deployment Guide

## Deployment Architecture

Each market directory consists of:
- **WordPress Backend** (CMS/Admin)
- **Next.js Frontend** (Public Site)
- **Domain Setup** (Custom domains)

## Example Deployments

### Melbourne Restaurants
- **Frontend**: `melbeats.com` (Vercel)
- **WordPress**: `admin.melbeats.com` (WordPress hosting)
- **API**: `admin.melbeats.com/wp-json/wp/v2/`

### Sydney Services  
- **Frontend**: `sydneyservices.com.au` (Vercel)
- **WordPress**: `cms.sydneyservices.com.au` (WordPress hosting)
- **API**: `cms.sydneyservices.com.au/wp-json/wp/v2/`

## Step-by-Step Deployment

### 1. WordPress Setup

**Hosting Options:**
- WP Engine (recommended for headless)
- Kinsta (developer-friendly)
- SiteGround (budget option)
- Local server (for testing)

**WordPress Configuration:**
```bash
# Install WordPress
# Install required plugins
# Configure custom post types
# Set up custom fields
# Test CSV import
```

### 2. Frontend Deployment

**Vercel Deployment:**
```bash
# Clone repository
git clone https://github.com/Bionic-Dongle/Directory-WordPress-Headless.git

# Install dependencies
npm install

# Configure environment variables
echo "WORDPRESS_API_URL=https://admin.melbeats.com/wp-json" > .env.local

# Deploy to Vercel
npx vercel --prod
```

**Environment Variables in Vercel:**
- `WORDPRESS_API_URL`
- `WORDPRESS_USERNAME` (if auth required)
- `WORDPRESS_PASSWORD` (if auth required)

### 3. Domain Configuration

**DNS Setup:**
```
# Frontend (Vercel)
melbeats.com → Vercel IP

# WordPress (hosting provider)
admin.melbeats.com → Hosting provider IP
```

**SSL Certificates:**
- Vercel handles SSL automatically
- WordPress hosting usually includes SSL
- Use Let's Encrypt for custom setups

### 4. Content Population

**Business Data Import:**
1. Prepare CSV file with local businesses
2. Log into WordPress admin
3. Use WP All Import to upload CSV
4. Map fields to custom fields
5. Run import process
6. Verify data appears on frontend

**Site Customization:**
1. Update hero text and images
2. Configure site branding (colors, logo)
3. Set contact information
4. Configure business categories
5. Test search and filtering

## Scaling to Multiple Markets

### Repository Management
```bash
# Create market-specific branches
git checkout -b melbourne-restaurants
git checkout -b sydney-services
git checkout -b brisbane-cafes

# Or use separate forks
# Each market gets own repository
```

### Deployment Automation
```bash
# GitHub Actions for auto-deployment
# Vercel integration
# WordPress staging/production sync
```

### Management Workflow
1. **Central Template Updates** - Update main repository
2. **Market Deployment** - Deploy to individual markets
3. **Content Management** - Each market manages own WordPress
4. **Monitoring** - Track performance across all markets

## Monitoring & Maintenance

### Health Checks
- WordPress API endpoints responding
- Frontend site loading correctly
- Search functionality working
- CSV import capability
- SSL certificates valid

### Backup Strategy
- WordPress database backups
- WordPress file backups
- Repository backups
- Environment variable documentation

### Update Process
1. Test updates on staging environment
2. Update template repository
3. Deploy to individual markets
4. Verify functionality
5. Monitor for issues

This deployment approach enables rapid scaling to multiple markets while maintaining centralized template management and individual market customization.