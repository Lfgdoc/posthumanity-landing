// build: v8.8
// Ano no footer
const y = document.getElementById('year'); if (y) y.textContent = String(new Date().getFullYear());
// Typing in header
const b = document.getElementById('brand-typing');
const TXT = 'POST-HUMANITY';
const D = 60, HOLD = 700, GAP = 500;
async function type(el, t){ if(!el) return; el.textContent=''; for(let i=0;i<t.length;i++){ el.textContent+=t[i]; await new Promise(r=>setTimeout(r,D)); } }
async function run(){ await type(b, TXT); await new Promise(r=>setTimeout(r,HOLD)); const el=document.querySelector('.brand-type'); if(el){ el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); } if(b) b.textContent=''; await new Promise(r=>setTimeout(r,GAP)); run(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
