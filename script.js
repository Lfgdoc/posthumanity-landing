// Year + official links
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
  el.textContent = '';
  for (let i=0;i<text.length;i++){
    el.textContent += text[i];
    await new Promise(r=>setTimeout(r, TYPE_DELAY));
  }
}

async function runCycle(){
  brandEl.textContent = '';
  heroEl.textContent = '';

  await Promise.all([ typeTo(brandEl, BRAND_TEXT), typeTo(heroEl, HERO_TEXT) ]);
  await new Promise(r=>setTimeout(r, HOLD_AFTER_TYPE));

  const brandContainer = document.querySelector('.brand-type');
  const heroContainer  = document.querySelector('.hero-type');
  brandContainer.classList.add('flicker');
  heroContainer.classList.add('flicker');
  await new Promise(r=>setTimeout(r, 5000));
  brandContainer.classList.remove('flicker');
  heroContainer.classList.remove('flicker');

  brandEl.textContent = '';
  heroEl.textContent  = '';
  await new Promise(r=>setTimeout(r, LOOP_GAP));
  runCycle();
}

runCycle();
