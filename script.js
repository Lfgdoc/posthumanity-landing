// PHA_OK: freeze-1-full-d

// Typing + cadenced flicker (header first, then hero)
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';
const TYPE_DELAY = 60, HOLD = 700, GAP = 500;
async function typeTo(el, text){ if(!el) return; el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r, TYPE_DELAY)); } }
async function flickerSync(){ const a=document.querySelector('.brand-type'); const b=document.querySelector('.hero-type'); if(a) a.classList.add('flicker'); if(b) b.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); if(a) a.classList.remove('flicker'); if(b) b.classList.remove('flicker'); }
async function loop(){ const bp=(async()=>{ await typeTo(brandEl, BRAND_TEXT); })(); await new Promise(r=>setTimeout(r,500)); const hp=(async()=>{ await typeTo(heroEl, HERO_TEXT); })(); await bp; await hp; await new Promise(r=>setTimeout(r,HOLD)); await flickerSync(); if(brandEl) brandEl.textContent=''; if(heroEl) heroEl.textContent=''; await new Promise(r=>setTimeout(r,GAP)); loop(); } loop();
