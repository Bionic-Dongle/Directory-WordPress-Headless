# WordPress Headless CMS Setup Guide

## WordPress Installation

### Required Plugins

1. **Advanced Custom Fields (ACF)** - For business data fields
2. **WP All Import** - For CSV bulk imports
3. **Custom Post Type UI** - For business post types
4. **WP REST API** - Enhanced API endpoints (if needed)

### Custom Post Types

#### Businesses Post Type
```php
// Custom post type configuration
'public' => true,
'show_in_rest' => true, // Enable REST API
'rest_base' => 'businesses',
'supports' => ['title', 'editor', 'thumbnail', 'custom-fields']
```

#### Custom Fields for Businesses
- **Basic Info**: name, description, address, phone, email, website
- **Business Details**: hours, price_range, rating, featured
- **Location**: coordinates, city, state, zip_code
- **Media**: featured_image, gallery
- **Categories**: business_category (taxonomy)
- **Status**: active, verified, featured

### REST API Endpoints

WordPress will automatically generate:
- `GET /wp-json/wp/v2/businesses` - List all businesses
- `GET /wp-json/wp/v2/businesses/{id}` - Single business
- `GET /wp-json/wp/v2/categories` - Business categories
- `GET /wp-json/wp/v2/pages` - Site content pages

### CSV Import Configuration

**Sample CSV Structure:**
```csv
name,description,address,phone,email,website,category,hours,rating
"Joe's Pizza","Best pizza in town","123 Main St","555-0123","joe@pizza.com","joespizza.com","restaurant","Mon-Fri 9-5","4.5"
```

**WP All Import Mapping:**
- Post Title → `name`
- Post Content → `description`
- Custom Fields → All other columns
- Post Status → `publish`
- Post Type → `businesses`

### Environment Variables

```bash
# WordPress API Configuration
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
WORDPRESS_API_USERNAME=admin
WORDPRESS_API_PASSWORD=your-app-password
```

### Security Considerations

- Use Application Passwords for API authentication
- Enable CORS for frontend domain
- Configure WordPress security plugins
- Regular backups and updates

### Multi-Market Setup

For each market directory:
1. **Separate WordPress Installation**
   - Own domain: `admin.melbeats.com`
   - Own database and content
   - Own branding and customization

2. **WordPress Multisite Alternative**
   - Single WordPress installation
   - Multiple sites with shared admin
   - Subdomain setup: `melbourne.directories.com`

## Testing Checklist

- [ ] WordPress admin accessible
- [ ] Custom post types created
- [ ] REST API endpoints responding
- [ ] CSV import working
- [ ] Custom fields mapping correctly
- [ ] Business data displays in API responses
- [ ] Authentication working (if required)
- [ ] CORS configured for frontend domain

## Common Issues

**CORS Errors**: Add to WordPress functions.php:
```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

**Permalink Issues**: Go to Settings → Permalinks and click "Save" to flush rewrite rules.

**REST API Not Working**: Ensure `.htaccess` is writable and permalink structure is set.

This setup provides a robust, scalable backend for your directory business model.