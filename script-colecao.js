// build: v8.14
document.getElementById('year').textContent = new Date().getFullYear();
const LINKS = { twitter:'https://x.com/PHA_NFT', discord:'https://discord.gg/SA9eyW47', magicEden:'#' };
document.querySelectorAll('[data-link=x]').forEach(a => a.href = LINKS.twitter);
document.querySelectorAll('[data-link=discord]').forEach(a => a.href = LINKS.discord);
document.querySelectorAll('[data-link=me]').forEach(a => a.href = LINKS.magicEden);
const b = document.getElementById('brand-typing'); const TXT='POST-HUMANITY'; const D=60,H=700,G=500;
async function type(el,t){ if(!el) return; el.textContent=''; for(let i=0;i<t.length;i++){ el.textContent+=t[i]; await new Promise(r=>setTimeout(r,D)); } }
async function fl(){ const el=document.querySelector('.brand-type'); el.classList.add('flicker'); await new Promise(r=>setTimeout(r,5000)); el.classList.remove('flicker'); }
async function loop(){ await type(b,TXT); await new Promise(r=>setTimeout(r,H)); await fl(); b.textContent=''; await new Promise(r=>setTimeout(r,G)); loop(); }
loop();
