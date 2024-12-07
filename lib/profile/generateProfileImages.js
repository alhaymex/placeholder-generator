const baseColor = "#F0F8FF";
const textColor = "#334E68";
const bgColor = "#A7C7E7";

function generateInitialsProfileImageSVG(initials, width, height) {
  const size = Math.min(width, height);

  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  const textColor = "#FFFFFF";

  const fontSize = size / 2;

  const limitedInitials = initials.slice(0, 2).toUpperCase();

  const cx = size / 2;
  const cy = size / 2;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" fill="${randomColor}" rx="${
    size / 6
  }" />
      <text x="${cx}" y="${cy}" font-family="Arial, sans-serif" font-size="${fontSize}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
        ${limitedInitials}
      </text>
    </svg>
  `;
}

module.exports = {
  generateInitialsProfileImageSVG,
};
