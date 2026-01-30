#!/bin/bash

# Script om placeholder images te maken voor portfolio
# Run: bash create-placeholders.sh

echo "Creating placeholder images..."

# Maak een eenvoudige SVG placeholder
cat > src/public/images/placeholder-project.svg << 'SVGEOF'
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2c5f7d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5ba4b8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad1)"/>
  <text x="200" y="150" font-family="Arial" font-size="24" fill="white" text-anchor="middle">
    N-TECH Project
  </text>
</svg>
SVGEOF

echo "✅ Placeholder images created!"
echo "Location: src/public/images/placeholder-project.svg"
