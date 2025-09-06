// build: v8.12
document.getElementById('year').textContent = new Date().getFullYear();
// Map links same as home
const LINKS = { magicEden:'#', twitter:'https://x.com/PHA_NFT', discord:'https://discord.gg/SA9eyW47' };
document.querySelectorAll('[data-link=me]').forEach(a => a.href = LINKS.magicEden);
document.querySelectorAll('[data-link=x]').forEach(a => a.href = LINKS.twitter);
document.querySelectorAll('[data-link=discord]').forEach(a => a.href = LINKS.discord);
// Typing in header
const b = document.getElementById('brand-typing'); const TXT = 'POST-HUMANITY'; const D=60,H=700,G=500;
async function type(el,t){ if(!el) return; el.textContent=''; for(let i=0;i<t.length;i++){ el.textContent+=t[i]; await new Promise(r=>setTimeout(r,D)); } }
async function flick(sel){ const el=document.querySelector(sel); if(!el) return; el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); }
async function loop(){ await type(b,TXT); await new Promise(r=>setTimeout(r,H)); await flick('.brand-type'); b.textContent=''; await new Promise(r=>setTimeout(r,G)); loop(); }
loop();
