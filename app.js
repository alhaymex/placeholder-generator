const express = require("express");
const {
  generateGridSVG,
  generateDiamondSVG,
  generateSquareSVG,
  generateCircleSVG,
  generateTriangleSVG,
  generateStarSVG,
  generateHexagonSVG,
  generateWaveSVG,
  generatePentagonSVG,
} = require("./lib/shapes/generateShapes");
const {
  generateInitialsProfileImageSVG,
} = require("./lib/profile/generateProfileImages");

const app = express();

app.get("/placeholder", (req, res) => {
  const width = req.query.width || 1200;
  const height = req.query.height || 1200;
  const shape = req.query.shape || "circle";

  let svgContent = "";

  switch (shape) {
    case "circle":
      svgContent = generateCircleSVG(width, height);
      break;
    case "square":
      svgContent = generateSquareSVG(width, height);
      break;
    case "diamond":
      svgContent = generateDiamondSVG(width, height);
      break;
    case "grid":
      svgContent = generateGridSVG(width, height);
      break;
    case "triangle":
      svgContent = generateTriangleSVG(width, height);
      break;
    case "star":
      svgContent = generateStarSVG(width, height);
      break;
    case "hexagon":
      svgContent = generateHexagonSVG(width, height);
      break;
    case "wave":
      svgContent = generateWaveSVG(width, height);
      break;
    case "pentagon":
      svgContent = generatePentagonSVG(width, height);
      break;
    default:
      svgContent = generateCircleSVG(width, height);
  }

  res.header("Content-Type", "image/svg+xml");
  res.send(svgContent);
});

app.get("/initials", (req, res) => {
  const width = 512;
  const height = 512;
  const initials = req.query.initials || "";

  if (!initials) {
    return res.status(400).send("Initials are required.");
  }

  const svgContent = generateInitialsProfileImageSVG(initials, width, height);

  res.header("Content-Type", "image/svg+xml");
  res.send(svgContent);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
