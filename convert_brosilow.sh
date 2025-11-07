#!/bin/bash

# Script to convert all JPG images in public/photos/brosilow to WebP format
# Usage: ./convert_brosilow.sh

DIR="public/photos/brosilow"

# Check if directory exists
if [ ! -d "$DIR" ]; then
    echo "Error: Directory $DIR does not exist"
    exit 1
fi

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp command not found. Please install WebP tools."
    exit 1
fi

# Convert all JPG files
for file in "$DIR"/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        echo "Converting: $filename.jpg"
        cwebp -resize 500 0 "$file" -o "$DIR/$filename.webp"
        
        if [ $? -eq 0 ]; then
            echo "✓ Successfully converted $filename.jpg to $filename.webp"
        else
            echo "✗ Failed to convert $filename.jpg"
        fi
    fi
done

echo "Conversion complete!"

