const express = require("express");
const sharp = require("sharp");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  const { width = 1200, height = 1200 } = req.query;

  const imgWidth = parseInt(width);
  const imgHeight = parseInt(height);

  if (isNaN(imgWidth) || isNaN(imgHeight) || imgWidth <= 0 || imgHeight <= 0) {
    return res.status(400).send("Invalid width or height");
  }

  try {
    const centerX = imgWidth / 2;
    const centerY = imgHeight / 2;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${imgWidth}" height="${imgHeight}" fill="none">
            <!-- Background -->
            <rect width="${imgWidth}" height="${imgHeight}" fill="#EAEAEA" rx="3"/>

            <!-- Shapes -->
            <g opacity=".5">
                <circle cx="${centerX}" cy="${centerY}" r="${
      Math.min(imgWidth, imgHeight) / 4
    }" fill="#FAFAFA" />
                <circle cx="${centerX}" cy="${centerY}" r="${
      Math.min(imgWidth, imgHeight) / 4
    }" stroke="#C9C9C9" stroke-width="2.418" fill="none" />
                <circle cx="${centerX}" cy="${centerY}" r="${
      Math.min(imgWidth, imgHeight) / 8
    }" fill="#FFFFFF" stroke="#C9C9C9" stroke-width="2.418" />

                <!-- Smaller inner circle -->
                <circle cx="${centerX}" cy="${centerY}" r="${
      Math.min(imgWidth, imgHeight) / 16
    }" fill="#666" />
            </g>
        </svg>
        `;

    const imageBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    res.set("Content-Type", "image/png");
    res.send(imageBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating the image");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
