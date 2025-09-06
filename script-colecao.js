// Year
document.getElementById('year')?.textContent = new Date().getFullYear().toString();

// Neon typing + 3x flicker loop for 'A COLEÇÃO'
const heroEl = document.getElementById('hero-typing');
const HERO_TEXT  = 'A COLEÇÃO';
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
  await typeTo(heroEl, HERO_TEXT);
  await new Promise(r=>setTimeout(r, HOLD_AFTER_TYPE));

  // Flicker
  const heroContainer  = document.querySelector('.hero-type');
  heroContainer.classList.add('flicker');
  await new Promise(r=>setTimeout(r, 5000));
  heroContainer.classList.remove('flicker');

  heroEl.textContent  = '';
  await new Promise(r=>setTimeout(r, LOOP_GAP));
  runCycle();
}
runCycle();
