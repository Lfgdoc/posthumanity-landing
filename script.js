// build: v8.12
// Year + official links (data-link mapping)
document.getElementById('year').textContent = new Date().getFullYear();

const LINKS = {
  magicEden: '#',
  twitter: 'https://x.com/PHA_NFT',
  discord: 'https://discord.gg/SA9eyW47',
};

document.querySelectorAll('[data-link=me]').forEach(a => a.href = LINKS.magicEden);
document.querySelectorAll('[data-link=x]').forEach(a => a.href = LINKS.twitter);
document.querySelectorAll('[data-link=discord]').forEach(a => a.href = LINKS.discord);

// Synchronized neon typing + 3x flicker loop for brand and hero
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';
const TYPE_DELAY = 60;
const HOLD_AFTER_TYPE = 700;
const LOOP_GAP = 500;

async function typeTo(el, text){
  if(!el) return;
  el.textContent='';
  for(let i=0;i<text.length;i++){
    el.textContent += text[i];
    await new Promise(r=>setTimeout(r, TYPE_DELAY));
  }
}
async function flickerOnce(sel){
  const el = document.querySelector(sel);
  if(!el) return;
  el.classList.add('flicker');
  await new Promise(r=>setTimeout(r, 5000));
  el.classList.remove('flicker');
}
async function runCycle(){
  await typeTo(brandEl, BRAND_TEXT);
  await typeTo(heroEl,  HERO_TEXT);
  await new Promise(r=>setTimeout(r, HOLD_AFTER_TYPE));
  await flickerOnce('.brand-type');
  await flickerOnce('.hero-type');
  brandEl.textContent = '';
  heroEl.textContent  = '';
  await new Promise(r=>setTimeout(r, LOOP_GAP));
  runCycle();
}
runCycle();
