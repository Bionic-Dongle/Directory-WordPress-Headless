# Migration Plan: Database → WordPress Headless CMS

## Current Status

This repository is being converted from the original database-based template to use WordPress as a headless CMS.

## Original Template Files to Copy

From `Directory-Website-Component-Blueprint`:

### Frontend Structure
- `/frontend/` directory (entire Next.js application)
- Components, pages, hooks, styles
- TypeScript interfaces and types
- Tailwind configuration

### Backend Reference
- `/backend/` directory (for API structure reference)
- Database schema (to recreate as WordPress custom fields)
- API endpoints (to convert to WordPress REST API calls)

## WordPress Architecture Plan

### WordPress Setup
1. **Custom Post Types**
   - `businesses` - Main business listings
   - `categories` - Business categories
   - `locations` - Geographic areas

2. **Custom Fields (ACF)**
   - Business: name, address, phone, email, website, hours, rating
   - Categories: name, description, icon
   - Content: hero text, branding, contact info

3. **Required Plugins**
   - Advanced Custom Fields (ACF)
   - WP All Import (CSV functionality)
   - Custom Post Type UI
   - WP REST API enhancements

### API Conversion

**Current Database Calls → WordPress REST API**

```javascript
// OLD: Direct database
const businesses = await db.select().from(businessTable)

// NEW: WordPress REST API
const businesses = await fetch('/wp-json/wp/v2/businesses')
  .then(res => res.json())
```

### Multi-Agent Development Tasks

**Agent 1: WordPress Backend Setup**
- Configure WordPress with custom post types
- Set up custom fields and REST API
- Test CSV import functionality

**Agent 2: API Integration Layer**
- Replace database calls with WordPress API
- Create data transformation functions
- Update environment configuration

**Agent 3: Frontend Integration**
- Update React hooks for WordPress data
- Test component rendering with new API
- Verify search and filtering functionality

## Completion Checklist

- [ ] Copy all original template files
- [ ] Set up WordPress backend
- [ ] Convert API layer
- [ ] Test end-to-end functionality
- [ ] Deploy first market directory
- [ ] Document deployment process

## Benefits of WordPress Headless Approach

✅ **Immediate admin interface** - WordPress dashboard  
✅ **Proven CSV import** - WordPress plugins  
✅ **Content management** - Native WordPress strength  
✅ **Scalable architecture** - Clean CMS/frontend separation  
✅ **Familiar workflow** - WordPress admin experience  
✅ **No authentication complexity** - WordPress handles user management  

This approach leverages the best of both worlds - proven CMS functionality with modern frontend presentation.