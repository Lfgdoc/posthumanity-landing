// Year + links
document.getElementById('year').textContent = new Date().getFullYear();
const LINKS = { magicEden:'#', twitter:'#', discord:'#' };
document.querySelector('[data-link=me]').href = LINKS.magicEden;
document.querySelector('[data-link=x]').href = LINKS.twitter;
document.querySelector('[data-link=discord]').href = LINKS.discord;

// Synchronized neon typing + 3x flicker loop for brand and hero
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');

const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';

const TYPE_DELAY = 60;         // ms per char
const HOLD_AFTER_TYPE = 700;   // pause after finishing typing both
const LOOP_GAP = 500;          // pause before re-typing after flicker

async function typeTo(el, text){
  el.textContent = '';
  for (let i=0;i<text.length;i++){
    el.textContent += text[i];
    await new Promise(r=>setTimeout(r, TYPE_DELAY));
  }
}

async function runCycle(){
  // Type both in sync
  brandEl.textContent = '';
  heroEl.textContent = '';

  // type in parallel
  await Promise.all([ typeTo(brandEl, BRAND_TEXT), typeTo(heroEl, HERO_TEXT) ]);
  await new Promise(r=>setTimeout(r, HOLD_AFTER_TYPE));

  // Flicker 3x (5s) on both
  const brandContainer = document.querySelector('.brand-type');
  const heroContainer  = document.querySelector('.hero-type');
  brandContainer.classList.add('flicker');
  heroContainer.classList.add('flicker');
  await new Promise(r=>setTimeout(r, 5000)); // must match CSS animation
  brandContainer.classList.remove('flicker');
  heroContainer.classList.remove('flicker');

  // Reset and loop
  brandEl.textContent = '';
  heroEl.textContent  = '';
  await new Promise(r=>setTimeout(r, LOOP_GAP));
  runCycle();
}

runCycle();
