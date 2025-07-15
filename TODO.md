# WordPress Headless Directory - Master To-Do List

## 🎯 PROJECT GOAL
Convert your V0 database-based directory template into a WordPress headless CMS system that can be deployed to multiple markets (Melbourne restaurants, Sydney services, etc.)

## ✅ COMPLETED SO FAR
- [x] Created new GitHub repository: `Directory-WordPress-Headless`
- [x] Set up basic project structure with documentation
- [x] Copied all frontend components from original V0 template
- [x] Created WordPress API integration layer with mock data fallback
- [x] Fixed most import path issues
- [x] Set up build configuration (Vite, Tailwind, TypeScript)

## 🚨 CURRENT ISSUE
- [ ] **Website shows blank page** - React components not rendering properly
- [ ] **Icon import error fixed** - but full interface still not showing
- [ ] **Need to restore full directory interface** from simple test component

## 📋 IMMEDIATE NEXT STEPS (This Week)

### Phase 1: Get Frontend Working (Priority 1)
- [ ] **Fix remaining component issues** - get full directory interface showing
- [ ] **Verify all business cards display** - Joe's Coffee, Main Street Pizza, etc.
- [ ] **Test search and filtering** - ensure mock data works
- [ ] **Confirm mobile responsiveness** - test on different screen sizes
- [ ] **Fix any styling issues** - ensure Tailwind classes work properly

### Phase 2: WordPress Backend Setup (Priority 2)
- [ ] **Set up WordPress instance** - choose hosting (WP Engine, Kinsta, or local)
- [ ] **Install required plugins:**
  - [ ] Advanced Custom Fields (ACF) - for business data fields
  - [ ] Custom Post Type UI - for business post types
  - [ ] WP All Import - for CSV bulk imports
- [ ] **Create custom post types:**
  - [ ] `businesses` - main business listings
  - [ ] `categories` - business categories
- [ ] **Set up custom fields** in ACF:
  - [ ] Business info: name, address, phone, email, website
  - [ ] Location: latitude, longitude, city, state
  - [ ] Details: hours, rating, featured status, photos
- [ ] **Test WordPress REST API** - ensure endpoints work

### Phase 3: Connect Frontend to WordPress (Priority 3)
- [ ] **Update environment variables** - point to WordPress API URL
- [ ] **Test API connection** - verify data flows from WordPress to frontend
- [ ] **Import sample businesses** - use CSV import to populate WordPress
- [ ] **Verify data transformation** - ensure WordPress data displays correctly
- [ ] **Test business submission form** - ensure new businesses can be added

### Phase 4: Multi-Market Deployment (Priority 4)
- [ ] **Deploy first directory** - Melbourne restaurants or services
- [ ] **Set up custom domain** - e.g., melbeats.com
- [ ] **Test full workflow** - add businesses, verify they appear on site
- [ ] **Create deployment template** - document process for future markets
- [ ] **Plan second market** - Sydney, Brisbane, or different niche

## 🛠 TECHNICAL REQUIREMENTS

### Frontend Stack (Already Set Up)
- React 18 with TypeScript
- Vite for build system
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons

### WordPress Requirements (Next Phase)
- WordPress hosting with REST API enabled
- Custom post types and fields
- CSV import capability
- Custom domain setup

### Deployment Requirements (Future)
- Vercel for frontend hosting
- WordPress hosting for backend
- Environment variable management
- Domain configuration

## 💰 REVENUE MODEL (Future Planning)
- **Basic listings** - Free business profiles
- **Premium listings** - Enhanced features, photos, priority placement
- **Featured spots** - Homepage placement, category top positions
- **CSV import service** - Bulk business addition for market launches

## 🎯 SUCCESS METRICS
- **Technical:** Site loads in <3 seconds, mobile responsive, 99%+ uptime
- **Business:** 25+ businesses per market, $500+ MRR per directory
- **Scalability:** New market deployment in <1 week using template

## 🔄 CURRENT STATUS: **Phase 1 - Frontend Debugging**

**Next Action:** Get Devin to fix the remaining component issues so we can see the full beautiful directory interface working with mock data.

**After that:** Move to Phase 2 (WordPress setup) once frontend is solid.

---

## 📝 NOTES FOR DEVIN

**READ THIS FIRST:** You are working on Phase 1 ONLY. Do not touch WordPress setup until the frontend is 100% working.

**Your Mission:** 
1. Fix the React component rendering issues
2. Get the full Melbourne Directory interface showing (not the simple test)
3. Ensure all mock business data displays properly
4. Test that search, categories, and business cards all work
5. Verify mobile responsiveness

**What's Already Done:**
- All V0 components have been copied from the original template
- WordPress API layer is set up with mock data fallback
- Build system (Vite/Tailwind) is configured
- Most import path issues are fixed

**Current Problem:**
- Site shows simple test component instead of full directory interface
- Need to restore the beautiful directory design with:
  - Hero section with Melbourne branding
  - Category grid with working icons
  - Business cards showing Joe's Coffee, Main Street Pizza, etc.
  - Search and filter functionality
  - Professional Tailwind styling

**Success Criteria:**
When you're done, the site should look like a professional business directory with sample Melbourne businesses, working search, and beautiful design.

**DO NOT:**
- Set up WordPress yet
- Change the project structure significantly  
- Add new features
- Move to Phase 2 until Phase 1 is complete

**Key Point:** We're building a SYSTEM that can be replicated for multiple markets, not just one website. Each market gets its own WordPress instance and branding but uses the same frontend template.