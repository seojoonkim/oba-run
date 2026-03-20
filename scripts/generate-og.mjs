import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const input = path.join(root, 'public/images/illustrations/hero-graffiti.jpg');
const output = path.join(root, 'public/og-image.png');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#CCFF00" />
      <stop offset="55%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#00FF87" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="rgba(0,0,0,0.56)" />
  <rect width="100%" height="100%" fill="url(#vignette)" opacity="0" />

  <rect x="0" y="0" width="1200" height="630" fill="rgba(0,0,0,0.20)"/>
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <text x="600" y="355"
        text-anchor="middle"
        font-family="Arial Black, Inter, sans-serif"
        font-size="184"
        font-weight="900"
        letter-spacing="-8"
        fill="url(#textGradient)"
        filter="url(#shadow)">foa.wtf</text>

  <text x="600" y="430"
        text-anchor="middle"
        font-family="Pretendard, Inter, sans-serif"
        font-size="34"
        font-weight="700"
        letter-spacing="8"
        fill="rgba(255,255,255,0.82)">FRIENDS OF API</text>
</svg>`;

const bg = sharp(input)
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.52, saturation: 0.92 })
  .composite([
    {
      input: Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow1" cx="18%" cy="18%" r="52%">
            <stop offset="0%" stop-color="rgba(204,255,0,0.14)"/>
            <stop offset="100%" stop-color="rgba(204,255,0,0)"/>
          </radialGradient>
          <radialGradient id="glow2" cx="82%" cy="76%" r="46%">
            <stop offset="0%" stop-color="rgba(255,45,120,0.10)"/>
            <stop offset="100%" stop-color="rgba(255,45,120,0)"/>
          </radialGradient>
          <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(0,0,0,0.30)"/>
            <stop offset="50%" stop-color="rgba(0,0,0,0.36)"/>
            <stop offset="100%" stop-color="rgba(0,0,0,0.58)"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#glow1)"/>
        <rect width="100%" height="100%" fill="url(#glow2)"/>
        <rect width="100%" height="100%" fill="url(#shade)"/>
      </svg>`),
      blend: 'over'
    }
  ]);

await bg.composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).png().toFile(output);

const stat = await fs.stat(output);
console.log(`Generated ${path.relative(root, output)} (${stat.size} bytes)`);
