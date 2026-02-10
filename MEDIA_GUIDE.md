# Using String Paths for Images and Videos - Guide

## ✅ What Changed

Your portfolio now supports **lazy-loaded images and videos** using string paths. This means:
- Images and videos only load when users click on a project
- Much faster initial page load
- Support for video files (.mp4, .webm, .mov)
- Easy to add new media without importing

---

## 📁 File Organization

**Important:** There are TWO asset directories:

1. **`src/assets/`** - For imported thumbnails (used in portfolio grid)
   - These are bundled by Vite
   - Import them at the top of `projectsData.ts`
   
2. **`public/assets/`** - For string path images/videos (used in detail pages)
   - These are served directly by the web server
   - Reference with `/assets/filename.ext`

```
Portfolio/
  ├── src/
  │   └── assets/
  │       ├── art-1.png      (thumbnails - imported)
  │       ├── art-2.png
  │       └── ...
  └── public/
      └── assets/
          ├── art-1.png      (detail images - string paths)
          ├── art-1a.jpg
          ├── art-1b.jpg
          ├── art-1-video.mp4
          └── ...
```

**Note:** You can have the same filename in both directories - they serve different purposes!

---

## 📝 How to Add Media to Projects

Edit `src/data/projectsData.ts`:

```typescript
{
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Abstract",
    description: "...",
    thumbnail: art1,  // Keep imported (always visible on grid)
    images: [
        "/assets/art-1.png",           // Image
        "/assets/art-1a.jpg",          // Image
        "/assets/art-1-process.mp4",   // Video!
        "/assets/art-1-turntable.webm" // Video!
    ],
    tools: ["Blender", "Houdini"],
    year: "2025",
}
```

---

## 🎬 Video Support

Videos are automatically detected by file extension and rendered with:
- ✅ Play/pause controls
- ✅ Loop enabled
- ✅ Muted by default (user can unmute)
- ✅ Mobile-friendly (`playsInline`)
- ✅ Lazy loading (`preload="metadata"`)

**Supported formats:**
- `.mp4` (recommended - best compatibility)
- `.webm` (good for web, smaller file size)
- `.mov` (works but larger files)

---

## 💡 Best Practices

### Image Formats
- **JPG**: Photos, renders with gradients → smaller file size
- **PNG**: Graphics with transparency or sharp edges
- **WebP**: Modern format, best compression (if browser support is okay)

### Video Tips
- Keep videos under 20MB for good performance
- Use 1080p or lower resolution
- Compress videos before uploading (use Handbrake or similar)
- Consider using `.webm` for smaller file sizes

### File Naming
Use descriptive, URL-friendly names:
- ✅ `fluid-dynamics-detail-1.jpg`
- ✅ `sentinel-turntable.mp4`
- ❌ `IMG_1234.jpg`
- ❌ `Final Version 2 (copy).png`

---

## 📊 Performance Benefits

**Before (imported images):**
- All images loaded on page load
- 6 projects × 3 images = 18 images loaded immediately
- Slow initial load time

**After (string paths):**
- Only thumbnails loaded on page load (6 images)
- Detail images/videos load only when user clicks
- ⚡ Much faster initial load!

---

## 🔧 Example: Adding a New Project

1. **Add your media files** to `public/assets/`:
   ```
   public/assets/
     ├── cyberpunk-city.jpg      (thumbnail)
     ├── cyberpunk-detail-1.jpg
     ├── cyberpunk-detail-2.jpg
     └── cyberpunk-flythrough.mp4
   ```

2. **Import the thumbnail** in `projectsData.ts`:
   ```typescript
   import cyberpunkThumb from "@/assets/cyberpunk-city.jpg";
   ```

3. **Add the project** to the array:
   ```typescript
   {
       id: "cyberpunk-city",
       title: "Cyberpunk City",
       category: "Environment",
       description: "A neon-lit futuristic cityscape...",
       thumbnail: cyberpunkThumb,
       images: [
           "/assets/cyberpunk-detail-1.jpg",
           "/assets/cyberpunk-detail-2.jpg",
           "/assets/cyberpunk-flythrough.mp4"
       ],
       tools: ["Unreal Engine", "Blender"],
       year: "2025",
   }
   ```

4. **Done!** The project will appear in your portfolio grid and have its own detail page.

---

## 🎨 Current Project Structure

All 6 projects now use string paths for detail images:
- **Fluid Dynamics**: 3 images
- **Sentinel**: 3 images
- **Crystal Realms**: 3 images
- **Venom GT**: 3 images
- **Void Chamber**: 3 images
- **Aether Form**: 3 images

You can now replace these paths with your own images and videos!

---

## 🐛 Troubleshooting

**Images not loading?**
- Check that files are in `public/assets/` (not `src/assets/`)
- Verify file paths start with `/assets/` (with leading slash)
- Check file names match exactly (case-sensitive)

**Videos not playing?**
- Ensure video format is supported (.mp4, .webm, .mov)
- Try compressing the video if it's too large
- Check browser console for errors

**Thumbnail not showing?**
- Thumbnails must be imported at the top of `projectsData.ts`
- Make sure the import path is correct
- Verify the file exists in `src/assets/`
