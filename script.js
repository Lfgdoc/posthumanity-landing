// Ano no footer
document.getElementById('year')?.textContent = new Date().getFullYear().toString();
// Digitação e flicker sincronizado (marca + título)
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';
const TYPE_DELAY = 60, HOLD_AFTER_TYPE = 700, LOOP_GAP = 500;
async function typeTo(el, text){ el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r,TYPE_DELAY)); } }
async function flicker(sel){ const el=document.querySelector(sel); el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker');}
async function cycle(){ await typeTo(brandEl, BRAND_TEXT); await typeTo(heroEl, HERO_TEXT); await new Promise(r=>setTimeout(r,HOLD_AFTER_TYPE)); await flicker('.brand-type'); await flicker('.hero-type'); brandEl.textContent=''; heroEl.textContent=''; await new Promise(r=>setTimeout(r,LOOP_GAP)); cycle(); }
cycle();
