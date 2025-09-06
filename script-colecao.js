// build: v8.2
document.getElementById('year')?.textContent = new Date().getFullYear();
const brandEl = document.getElementById('brand-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const TYPE_DELAY = 60, HOLD_AFTER_TYPE = 700, LOOP_GAP = 500;
async function typeTo(el, text){ el.textContent=''; for(let i=0;i<text.length;i++){ el.textContent+=text[i]; await new Promise(r=>setTimeout(r,TYPE_DELAY)); } }
async function run(){ if(brandEl){ await typeTo(brandEl, BRAND_TEXT); await new Promise(r=>setTimeout(r,HOLD_AFTER_TYPE)); const el=document.querySelector('.brand-type'); el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); brandEl.textContent=''; } await new Promise(r=>setTimeout(r,LOOP_GAP)); run(); } run();
