import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const input = path.join(root, 'public/images/illustrations/hero-graffiti.jpg');
const output = path.join(root, 'public/og-image.png');
const blackHanSubsetFont = path.join(root, '.next/dev/static/media/c6ed17e7db77ae02-s.0y-1jngawesst.woff2');

const width = 1200;
const height = 630;

const fontData = await fs.readFile(blackHanSubsetFont);
const fontBase64 = fontData.toString('base64');

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Black Han Sans Hero';
        src: url(data:font/woff2;base64,${fontBase64}) format('woff2');
        font-weight: 400;
        font-style: normal;
      }
    </style>
    <linearGradient id="heroLogoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#d6ff4d" />
      <stop offset="28%" stop-color="#ccff00" />
      <stop offset="52%" stop-color="#efff9d" />
      <stop offset="76%" stop-color="#ccff00" />
      <stop offset="100%" stop-color="#d6ff4d" />
    </linearGradient>
    <filter id="heroShadow" x="-20%" y="-25%" width="140%" height="170%">
      <feDropShadow dx="0" dy="0" stdDeviation="11" flood-color="#ccff00" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="0" stdDeviation="26" flood-color="#ccff00" flood-opacity="0.08"/>
      <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="#000000" flood-opacity="0.60"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="1200" height="630" fill="rgba(0,0,0,0.22)"/>
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <text x="600" y="358"
        text-anchor="middle"
        font-family="'Black Han Sans Hero', 'Black Han Sans', Impact, sans-serif"
        font-size="192"
        font-weight="400"
        letter-spacing="-9.6"
        fill="url(#heroLogoGradient)"
        filter="url(#heroShadow)">Oba.wtf</text>

  <text x="600" y="435"
        text-anchor="middle"
        font-family="Pretendard, Inter, sans-serif"
        font-size="30"
        font-weight="700"
        letter-spacing="7.2"
        fill="rgba(255,255,255,0.84)">OPEN BUILDERS ALLIANCE</text>
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
console.log(`Font source: ${path.relative(root, blackHanSubsetFont)}`);
