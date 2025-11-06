# Performance Analysis & Optimization Recommendations

## Current Issues Identified

### 1. **Image File Sizes (CRITICAL)**

- **Photo gallery images**: 1.8MB - 6.9MB each (6 images = ~20MB total)
- **Main poster**: 2.4MB PNG (`2025_dickens_web_transparency.png`)
- **Impact**: Massive initial page load, poor mobile experience

### 2. **Image Loading Strategy**

- All 6 images in `PictureReviewScramble` load immediately (even hidden ones)
- No `priority` prop on critical above-the-fold images
- Missing `sizes` attribute for responsive image loading
- No lazy loading for below-the-fold images

### 3. **Request Chaining**

- Client components where server components would suffice
- No resource preloading
- Font loading not optimized

### 4. **Missing Next.js Image Optimization**

- No image optimization config in `next.config.mjs`
- PNG used instead of WebP/AVIF for transparency

---

## Optimization Recommendations

### Priority 1: Image Optimization (Highest Impact)

#### A. Optimize Image Files

1. **Convert and compress images**:

   - Convert PNG to WebP with transparency support
   - Compress JPGs to 80-85% quality
   - Target sizes:
     - Hero images: 200-400KB max
     - Gallery thumbnails: 50-150KB max
     - Full-size gallery: 500KB-1MB max

2. **Use modern formats**:
   - WebP for photos (better compression than JPG)
   - AVIF where supported (even better compression)
   - Keep PNG only if WebP transparency doesn't work

#### B. Implement Proper Image Loading

1. **Add `priority` to LCP image**:

   ```tsx
   // In FirstLeft.tsx - the main poster
   <Image
     src={MainImage.src}
     priority  // Add this
     ...
   />
   ```

2. **Add `sizes` attribute for responsive loading**:

   ```tsx
   <Image
     sizes="(max-width: 768px) 100vw, 50vw"
     ...
   />
   ```

3. **Lazy load below-the-fold images**:

   ```tsx
   // In PictureReviewScramble - images below fold
   <Image
     loading="lazy"  // Add this
     ...
   />
   ```

4. **Preload critical images**:
   ```tsx
   // In page.tsx or layout.tsx
   <link rel="preload" as="image" href="/2025_dickens_web_transparency.webp" />
   ```

### Priority 2: Reduce Initial Load

#### A. Lazy Load Gallery Images

- Only load visible images initially
- Load others on scroll or when needed
- Consider intersection observer for progressive loading

#### B. Convert Client Components to Server Components

- `Schedule` component doesn't need client-side JS
- `FirstRightMultitext` could be server-side with URL params or separate routes

### Priority 3: Next.js Configuration

#### Add Image Optimization Config

```js
// next.config.mjs
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // ... existing config
};
```

### Priority 4: Code Splitting

#### Dynamic Imports for Below-the-Fold Components

```tsx
import dynamic from "next/dynamic";

const PictureReviewScramble = dynamic(
  () => import("@/components/picture_review_scramble"),
  { ssr: false } // or true if you want SSR
);
```

---

## Specific File Changes Needed

### 1. `app/page.tsx`

- Add `priority` to FirstLeft image
- Consider dynamic import for PictureReviewScramble
- Add preload link for critical image

### 2. `components/first_left.tsx`

- Add `priority` prop to main poster image
- Add `sizes` attribute
- Consider converting PNG to WebP

### 3. `components/picture_review_scramble.tsx`

- Add `loading="lazy"` to all images
- Add `sizes` attribute
- Consider loading only first 2-3 images initially
- Load remaining images on intersection or after delay

### 4. `components/schedule.tsx`

- Convert to server component (remove "use client" if possible)
- Add `loading="lazy"` to images
- Add `sizes` attribute

### 5. `next.config.mjs`

- Add image optimization configuration

---

## Expected Performance Improvements

### Before:

- Initial page load: ~25-30MB
- Time to Interactive: 5-8 seconds (3G)
- LCP: 3-5 seconds

### After (with optimizations):

- Initial page load: ~2-3MB
- Time to Interactive: 1-2 seconds (3G)
- LCP: 1-2 seconds

### Metrics to Monitor:

- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Total page weight
- Number of requests

---

## Implementation Priority

1. **Immediate (Do First)**:

   - Optimize image file sizes (compress/convert)
   - Add `priority` to hero image
   - Add `sizes` attributes

2. **High Priority**:

   - Configure Next.js image optimization
   - Lazy load gallery images
   - Add preload for critical resources

3. **Medium Priority**:

   - Convert client components to server components
   - Implement progressive image loading
   - Code splitting for below-the-fold content

4. **Nice to Have**:
   - Image CDN
   - Service worker for image caching
   - Blur placeholder images

---

## Tools for Image Optimization

- **Squoosh** (web): https://squoosh.app
- **ImageOptim** (Mac): https://imageoptim.com
- **Sharp** (CLI): `npm install -g sharp-cli`
- **Next.js Image Optimization**: Built-in, just needs config

---

## Quick Wins (Can implement immediately)

1. Add `priority` to FirstLeft image
2. Add `loading="lazy"` to PictureReviewScramble images
3. Add `sizes` attributes to all images
4. Compress the main PNG poster (2.4MB → ~400KB)
