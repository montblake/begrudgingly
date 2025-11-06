#!/usr/bin/env node

/**
 * Image Compression Script
 * Compresses images used on the homepage and throughout the site
 * 
 * Usage: node scripts/compress-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to compress with their target formats and settings
const imagesToCompress = [
  // Hero image - convert PNG to WebP
  {
    input: 'public/2025_dickens_web_transparency.png',
    output: 'public/2025_dickens_web_transparency.webp',
    options: {
      quality: 85,
      effort: 6,
    },
    format: 'webp',
  },
  // Gallery images - compress JPGs and create WebP versions
  {
    input: 'public/photos/2025/1_joe-mazza.jpg',
    output: 'public/photos/2025/1_joe-mazza.jpg',
    webp: 'public/photos/2025/1_joe-mazza.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  {
    input: 'public/photos/2025/42_joe-mazza.jpg',
    output: 'public/photos/2025/42_joe-mazza.jpg',
    webp: 'public/photos/2025/42_joe-mazza.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  {
    input: 'public/photos/2025/45_joe-mazza.jpg',
    output: 'public/photos/2025/45_joe-mazza.jpg',
    webp: 'public/photos/2025/45_joe-mazza.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  {
    input: 'public/photos/2025/4_joe-mazza.jpg',
    output: 'public/photos/2025/4_joe-mazza.jpg',
    webp: 'public/photos/2025/4_joe-mazza.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  {
    input: 'public/photos/2025/23_joe-mazza.jpg',
    output: 'public/photos/2025/23_joe-mazza.jpg',
    webp: 'public/photos/2025/23_joe-mazza.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  {
    input: 'public/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg',
    output: 'public/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg',
    webp: 'public/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
  // Schedule component images
  {
    input: 'public/clownshow_logo_tent.png',
    output: 'public/clownshow_logo_tent.webp',
    options: {
      quality: 85,
      effort: 6,
    },
    format: 'webp',
  },
  {
    input: 'public/dickens_house_poster_2.jpg',
    output: 'public/dickens_house_poster_2.jpg',
    webp: 'public/dickens_house_poster_2.webp',
    options: {
      quality: 82,
      mozjpeg: true,
    },
    format: 'jpg',
  },
];

async function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function compressImage(config) {
  const { input, output, webp, options, format } = config;

  try {
    // Check if input file exists
    if (!fs.existsSync(input)) {
      console.log(`⚠️  Skipping ${input} - file not found`);
      return null;
    }

    const originalSize = await getFileSize(input);
    console.log(`\n📸 Processing: ${input}`);
    console.log(`   Original size: ${formatBytes(originalSize)}`);

    // Read metadata first (before any processing)
    const metadata = await sharp(input).metadata();
    
    // Use temp file if input and output are the same
    const isSameFile = path.resolve(input) === path.resolve(output);
    const tempOutput = isSameFile ? output + '.tmp' : output;

    let image = sharp(input);

    // Resize if needed (max width 2000px for web)
    if (metadata.width > 2000) {
      image = image.resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
      console.log(`   Resizing from ${metadata.width}x${metadata.height} to max 2000px width`);
    }

    // Compress based on format
    if (format === 'webp') {
      await image
        .webp(options)
        .toFile(tempOutput);
    } else if (format === 'jpg') {
      // Compress original JPG
      await image
        .jpeg(options)
        .toFile(tempOutput);

      // Create WebP version if specified
      if (webp) {
        await sharp(input)
          .resize(metadata.width > 2000 ? 2000 : null, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({ quality: 85, effort: 6 })
          .toFile(webp);
      }
    }

    // Replace original with compressed version if same file
    if (isSameFile) {
      fs.renameSync(tempOutput, output);
    }

    const newSize = await getFileSize(output);
    const savings = ((originalSize - newSize) / originalSize) * 100;
    const savingsFormatted = formatBytes(originalSize - newSize);

    console.log(`   ✅ Compressed: ${formatBytes(newSize)}`);
    console.log(`   💾 Saved: ${savingsFormatted} (${savings.toFixed(1)}%)`);

    if (webp && fs.existsSync(webp)) {
      const webpSize = await getFileSize(webp);
      console.log(`   ✅ WebP version: ${formatBytes(webpSize)}`);
    }

    return {
      input,
      output,
      originalSize,
      newSize,
      savings,
    };
  } catch (error) {
    console.error(`❌ Error processing ${input}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image compression...\n');
  console.log(`Processing ${imagesToCompress.length} images...\n`);

  const results = [];

  for (const config of imagesToCompress) {
    const result = await compressImage(config);
    if (result) {
      results.push(result);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Compression Summary');
  console.log('='.repeat(60));

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalSavings = totalOriginal - totalNew;
  const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);

  console.log(`\nTotal original size: ${formatBytes(totalOriginal)}`);
  console.log(`Total compressed size: ${formatBytes(totalNew)}`);
  console.log(`Total savings: ${formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
  console.log('\n✅ Compression complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Update image references in components to use .webp where available');
  console.log('   2. Test the site to ensure images display correctly');
  console.log('   3. Consider keeping original files as backup');
}

main().catch(console.error);

