const express = require("express");
const app = express();

const baseColor = "#F0F8FF";
const strokeColor = "#CCDDEE";

app.get("/", (req, res) => {
  const width = req.query.width || 1200;
  const height = req.query.height || 1200;
  const shape = req.query.shape || "circle";

  let svgContent = "";

  if (shape === "circle") {
    svgContent = generateCircleSVG(width, height);
  } else if (shape === "square") {
    svgContent = generateSquareSVG(width, height);
  } else if (shape === "diamond") {
    svgContent = generateDiamondSVG(width, height);
  } else {
    svgContent = generateCircleSVG(width, height);
  }

  res.header("Content-Type", "image/svg+xml");
  res.send(svgContent);
});

function generateCircleSVG(width, height) {
  const radius = Math.min(width, height) / 4; // Proportional radius
  const cx = width / 2; // Center X
  const cy = height / 2; // Center Y

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${baseColor}" />
          <stop offset="100%" stop-color="${baseColor + "40"}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#gradient)" rx="5"/>
      <g opacity=".7">
        <path stroke="${strokeColor}" stroke-width="1.2" fill="none" 
              d="M${cx} ${cy - radius} 
                 A${radius} ${radius} 0 1 1 ${cx} ${cy + radius} 
                 A${radius} ${radius} 0 1 1 ${cx} ${cy - radius}Z"/>
      </g>
    </svg>
  `;
}

function generateSquareSVG(width, height) {
  const size = Math.min(width, height) / 2;
  const x = (width - size) / 2;
  const y = (height - size) / 2;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${baseColor}" />
        <rect x="${x}" y="${y}" width="${size}" height="${size}" stroke="${strokeColor}" stroke-width="2.418"/>
      </g>
    </svg>
  `;
}

function generateDiamondSVG(width, height) {
  const size = Math.min(width, height) / 2;
  const cx = width / 2;
  const cy = height / 2;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <polygon points="${cx},${cy - size} ${cx + size},${cy} ${cx},${
    cy + size
  } ${cx - size},${cy}" fill="${baseColor}"/>
        <polygon points="${cx},${cy - size} ${cx + size},${cy} ${cx},${
    cy + size
  } ${cx - size},${cy}" stroke="${strokeColor}" stroke-width="2.418"/>
      </g>
    </svg>
  `;
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
