#!/usr/bin/env node

const URLS = ['https://oba-run.vercel.app', 'https://oba.run'];

async function fetchMeta(url) {
  const res = await fetch(url, { redirect: 'follow' });
  const text = await res.text();
  const dpl = (text.match(/data-dpl-id="([^"]+)"/) || [])[1] || null;
  const hasMyRealTrip = text.includes('MyRealTrip') || text.includes('myrealtrip.jpg');
  return {
    url,
    status: res.status,
    dpl,
    hasMyRealTrip,
    vercelId: res.headers.get('x-vercel-id'),
    cache: res.headers.get('x-vercel-cache'),
  };
}

const [prod, domain] = await Promise.all(URLS.map(fetchMeta));

console.log('Production app:', prod);
console.log('Custom domain  :', domain);

if (prod.status !== 200 || domain.status !== 200) {
  console.error('❌ Deploy check failed: non-200 response');
  process.exit(1);
}

if (!prod.hasMyRealTrip) {
  console.error('❌ Deploy check failed: production app missing expected latest content');
  process.exit(1);
}

if (prod.dpl !== domain.dpl) {
  console.error('❌ Domain mismatch: oba.run points to a different deployment than oba-run.vercel.app');
  console.error('Fix with: vercel alias set <latest-production-url> oba.run');
  process.exit(2);
}

console.log('✅ Deploy verified: oba.run matches latest production deployment.');
