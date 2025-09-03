document.getElementById('year').textContent = new Date().getFullYear();
const LINKS = { magicEden:'#', twitter:'#', discord:'#' };
document.querySelector('[data-link=me]').href = LINKS.magicEden;
document.querySelector('[data-link=x]').href = LINKS.twitter;
document.querySelector('[data-link=discord]').href = LINKS.discord;
// Neon typing for POST-HUMANITY
const brandEl = document.getElementById('brand-typing');
const BRAND_TEXT = 'POST-HUMANITY';
const TYPE_DELAY = 65;
(async function typeBrand(){
  brandEl.textContent='';
  for(let i=0;i<BRAND_TEXT.length;i++){
    brandEl.textContent += BRAND_TEXT[i];
    await new Promise(r=>setTimeout(r, TYPE_DELAY));
  }
})();