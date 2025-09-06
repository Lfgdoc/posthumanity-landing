// build: v8.6
// Ano no footer
const yearEl2 = document.getElementById('year'); if (yearEl2) yearEl2.textContent = String(new Date().getFullYear());

// Typing only in header (Coleção)
const brandEl2 = document.getElementById('brand-typing');
const BRAND_TEXT2 = 'POST-HUMANITY';
const TYPE_DELAY2 = 60, HOLD_AFTER_TYPE2 = 700, LOOP_GAP2 = 500;
async function typeTo2(el, text){ if(!el) return; el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r,TYPE_DELAY2)); } }
async function run2(){ await typeTo2(brandEl2, BRAND_TEXT2); await new Promise(r=>setTimeout(r,HOLD_AFTER_TYPE2)); const el=document.querySelector('.brand-type'); if(el){ el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); } if(brandEl2) brandEl2.textContent=''; await new Promise(r=>setTimeout(r,LOOP_GAP2)); run2(); }
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run2); } else { run2(); }
