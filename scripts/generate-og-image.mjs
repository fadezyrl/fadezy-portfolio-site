import fs from "fs";
import path from "path";
import sharp from "sharp";

const outDir = "public/assets/og";
fs.mkdirSync(outDir, { recursive: true });

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#faf8f2"/>
  <line x1="96" y1="520" x2="420" y2="520" stroke="rgba(41,41,40,0.14)" stroke-width="1"/>
  <text x="96" y="250" fill="#292928" font-family="Georgia, 'Times New Roman', serif" font-size="92" letter-spacing="8">FADEZY</text>
  <text x="96" y="330" fill="rgba(41,41,40,0.72)" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-style="italic">Websites &amp; digital identities</text>
  <text x="96" y="390" fill="rgba(41,41,40,0.72)" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-style="italic">for barbershops &amp; beauty salons.</text>
  <text x="96" y="560" fill="rgba(41,41,40,0.4)" font-family="monospace" font-size="16" letter-spacing="4">WWW.FADEZYRL.COM</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(path.join(outDir, "opengraph.jpg"));

console.log("OG image created at public/assets/og/opengraph.jpg");
