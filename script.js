// build: v8.11
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = String(new Date().getFullYear());
const brandEl = document.getElementById('brand-typing');
const heroEl  = document.getElementById('hero-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const HERO_TEXT  = 'POST-HUMANITY ARCHIVES';
const TYPE_DELAY = 60, HOLD_AFTER_TYPE = 700, LOOP_GAP = 500;
async function typeTo(el, text){ if(!el) return; el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r,TYPE_DELAY)); } }
async function flickerOnce(sel){ const el=document.querySelector(sel); if(!el) return; el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); }
async function cycle(){ await typeTo(brandEl, BRAND_TEXT); await typeTo(heroEl, HERO_TEXT); await new Promise(r=>setTimeout(r,HOLD_AFTER_TYPE)); await flickerOnce('.brand-type'); await flickerOnce('.hero-type'); if(brandEl) brandEl.textContent=''; if(heroEl) heroEl.textContent=''; await new Promise(r=>setTimeout(r,LOOP_GAP)); cycle(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cycle); else cycle();
