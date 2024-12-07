const baseColor = "#F0F8FF";
const strokeColor = "#CCDDEE";

function generateCircleSVG(width, height) {
  const radius = Math.min(width, height) / 4;
  const cx = width / 2;
  const cy = height / 2;

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

function generateGridSVG(width, height) {
  const gridSpacing = 50;

  const verticalLines = Math.floor(width / gridSpacing);
  const horizontalLines = Math.floor(height / gridSpacing);

  let gridLines = "";
  for (let i = 0; i <= verticalLines; i++) {
    const xPos = i * gridSpacing;
    gridLines += `<line x1="${xPos}" y1="0" x2="${xPos}" y2="${height}" stroke="${strokeColor}" stroke-width="0.8"/>`;
  }
  for (let i = 0; i <= horizontalLines; i++) {
    const yPos = i * gridSpacing;
    gridLines += `<line x1="0" y1="${yPos}" x2="${width}" y2="${yPos}" stroke="${strokeColor}" stroke-width="0.8"/>`;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${baseColor}" />
          <stop offset="100%" stop-color="${baseColor + "40"}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#gradient)" rx="5"/>
      <g opacity=".5">
        ${gridLines}
      </g>
    </svg>
  `;
}

function generateTriangleSVG(width, height) {
  const size = Math.min(width, height) / 3;
  const cx = width / 2;
  const cy = height / 2;
  const points = `${cx},${cy - size} ${cx - size},${cy + size} ${cx + size},${
    cy + size
  }`;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <polygon points="${points}" fill="${baseColor}" stroke="${strokeColor}" stroke-width="2"/>
      </g>
    </svg>
  `;
}

function generateStarSVG(width, height) {
  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = Math.min(width, height) / 3;
  const innerRadius = outerRadius / 2;

  const points = [];
  for (let i = 0; i < 5; i++) {
    const outerX = cx + outerRadius * Math.cos((i * 2 * Math.PI) / 5);
    const outerY = cy + outerRadius * Math.sin((i * 2 * Math.PI) / 5);
    points.push(`${outerX},${outerY}`);

    const innerX = cx + innerRadius * Math.cos(((i + 0.5) * 2 * Math.PI) / 5);
    const innerY = cy + innerRadius * Math.sin(((i + 0.5) * 2 * Math.PI) / 5);
    points.push(`${innerX},${innerY}`);
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <polygon points="${points.join(
          " "
        )}" fill="${baseColor}" stroke="${strokeColor}" stroke-width="2"/>
      </g>
    </svg>
  `;
}

function generateHexagonSVG(width, height) {
  const radius = Math.min(width, height) / 3;
  const cx = width / 2;
  const cy = height / 2;

  const points = [];
  for (let i = 0; i < 6; i++) {
    const x = cx + radius * Math.cos((i * 2 * Math.PI) / 6);
    const y = cy + radius * Math.sin((i * 2 * Math.PI) / 6);
    points.push(`${x},${y}`);
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <polygon points="${points.join(
          " "
        )}" fill="${baseColor}" stroke="${strokeColor}" stroke-width="2"/>
      </g>
    </svg>
  `;
}

function generateSquareSVG(width, height) {
  const size = Math.min(width, height) / 3;
  const cx = width / 2;
  const cy = height / 2;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".7">
        <path fill="${baseColor}" stroke="${strokeColor}" stroke-width="2.418"
              d="M${cx - size} 0 L${cx - size} ${height} M${cx + size} 0 L${
    cx + size
  } ${height} 
                 M0 ${cy - size} L${width} ${cy - size} M0 ${
    cy + size
  } L${width} ${cy + size}"/>
      </g>
    </svg>
  `;
}

function generateWaveSVG(width, height) {
  const waveHeight = Math.min(width, height) / 6;
  const waveLength = width / 2;
  const cy = height / 2;

  let pathData = `M0,${cy} `;
  for (let x = 0; x <= width; x += 10) {
    const y = cy + waveHeight * Math.sin((x / waveLength) * 2 * Math.PI);
    pathData += `L${x},${y} `;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <path d="${pathData}" stroke="${strokeColor}" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `;
}

function generatePentagonSVG(width, height) {
  const size = Math.min(width, height) / 3;
  const cx = width / 2;
  const cy = height / 2;

  const points = [];
  for (let i = 0; i < 5; i++) {
    const x = cx + size * Math.cos((i * 2 * Math.PI) / 5);
    const y = cy + size * Math.sin((i * 2 * Math.PI) / 5);
    points.push(`${x},${y}`);
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${baseColor}" rx="3"/>
      <g opacity=".5">
        <polygon points="${points.join(
          " "
        )}" fill="${baseColor}" stroke="${strokeColor}" stroke-width="2"/>
      </g>
    </svg>
  `;
}

module.exports = {
  generateCircleSVG,
  generateSquareSVG,
  generateDiamondSVG,
  generateGridSVG,
  generateTriangleSVG,
  generateStarSVG,
  generateHexagonSVG,
  generateWaveSVG,
  generatePentagonSVG,
};
