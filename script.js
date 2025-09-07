// PHA_OK: freeze-1-full
console.log('PHA_OK: freeze-1-full');
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

// Links oficiais via data-link
const LINKS = {
  twitter: 'https://x.com/PHA_NFT',
  discord: 'https://discord.gg/SA9eyW47',
  magicEden: '#'
};
document.querySelectorAll('[data-link=x]').forEach(a => a.href = LINKS.twitter);
document.querySelectorAll('[data-link=discord]').forEach(a => a.href = LINKS.discord);
document.querySelectorAll('[data-link=me]').forEach(a => a.href = LINKS.magicEden);

// Typing + flicker
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';
const TYPE_DELAY = 60, HOLD = 700, GAP = 500;

async function typeTo(el, text){ if(!el) return; el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r, TYPE_DELAY)); } }
async function flicker(sel){ const el = document.querySelector(sel); if(!el) return; el.classList.add('flicker'); await new Promise(r=>setTimeout(r, 5000)); el.classList.remove('flicker'); }
async function loop(){ await typeTo(brandEl, BRAND_TEXT); await typeTo(heroEl, HERO_TEXT); await new Promise(r=>setTimeout(r, HOLD)); await flicker('.brand-type'); await flicker('.hero-type'); brandEl.textContent=''; heroEl.textContent=''; await new Promise(r=>setTimeout(r, GAP)); loop(); }
loop();
