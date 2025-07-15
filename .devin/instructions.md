# Instructions for Devin

## 🎯 Your Current Mission

**PHASE 1 ONLY:** Fix the frontend React components so the full directory interface displays properly.

## 📋 Specific Tasks

1. **Restore Full Directory Interface**
   - Currently showing simple test component
   - Need to show the complete Melbourne Directory with:
     - Navigation bar with logo
     - Hero section with search functionality  
     - Category grid (6 categories with icons)
     - Featured business cards (4 businesses)
     - Search and filter components
     - Footer with contact info

2. **Debug Component Issues**
   - Check why main App component isn't rendering full interface
   - Verify all imports are working correctly
   - Ensure Tailwind CSS classes are applied
   - Fix any remaining TypeScript errors

3. **Test Mock Data Display**
   - Ensure sample businesses show up:
     - Joe's Coffee Shop (cafe)
     - Main Street Pizza (restaurant) 
     - Tech Repair Shop (service)
     - Fashion Boutique (retail)
   - Verify business cards show photos, ratings, contact info
   - Test search functionality with mock data

4. **Verify Mobile Responsiveness**
   - Test on different screen sizes
   - Ensure navigation menu works on mobile
   - Check business card grid responsiveness

## ✅ Success Criteria

When you're done:
- `npm run dev` shows professional directory website
- All sample businesses display with photos and details
- Search bar in hero section works
- Category buttons filter businesses correctly
- Mobile menu works properly
- No console errors in browser

## 🚫 What NOT to Do

- Do not set up WordPress (that's Phase 2)
- Do not change project structure  
- Do not add new features
- Do not modify the build configuration
- Do not touch deployment settings

## 📁 Key Files

- `src/App.tsx` - Main app (needs to show full interface, not test)
- `src/components/` - All UI components from V0 template
- `src/lib/wordpress-api.ts` - API with mock data (already working)
- `TODO.md` - Full project roadmap
- `CURRENT_STATUS.md` - Current state and issues

## 🔍 Debugging Tips

- Check browser console for errors
- Verify all component imports
- Test that mock data is loading
- Ensure Tailwind classes are working
- Check that all Lucide icons exist

**Remember:** All the hard work of copying V0 components is done. You just need to debug why they're not displaying properly!