document.getElementById('year').textContent = new Date().getFullYear();
// Substitua pelos seus links reais quando quiser
const LINKS = { magicEden:'#', twitter:'#', discord:'#' };
document.querySelector('[data-link=me]').href = LINKS.magicEden;
document.querySelector('[data-link=x]').href = LINKS.twitter;
document.querySelector('[data-link=discord]').href = LINKS.discord;
