// Year + links
document.getElementById('year').textContent = new Date().getFullYear();
const LINKS = { magicEden:'#', twitter:'#', discord:'#' };
document.querySelector('[data-link=me]').href = LINKS.magicEden;
document.querySelector('[data-link=x]').href = LINKS.twitter;
document.querySelector('[data-link=discord]').href = LINKS.discord;

// Matrix-like typing with loop + 3x flicker over 5s each cycle
const lineEl = document.getElementById('typing-line');
const hero = document.querySelector('.hero');
const LINES = [
  'POST–HUMANITY ARCHIVES',
  'A DIGITAL RELIC OF WHAT WE ONCE WERE',
  'WHERE MEMORY IS SOVEREIGN'
];

let idx = 0;
const TYPE_DELAY = 55;        // typing speed (ms per char)
const HOLD_AFTER_TYPE = 900;  // pause after full line typed (ms)
const BETWEEN_LINES = 380;    // time between lines
const HOLD_AFTER_BLOCK = 800; // pause before flicker
const LOOP_DELAY = 600;       // pause before restarting typing after flicker (extra)

async function typeLine(text){
  lineEl.textContent = '';
  for (let i=0;i<text.length;i++){
    lineEl.textContent += text[i];
    await new Promise(r=>setTimeout(r, TYPE_DELAY));
  }
  await new Promise(r=>setTimeout(r, HOLD_AFTER_TYPE));
}

async function runBlock(){
  // type all lines
  for (let l=0;l<LINES.length;l++){
    await typeLine(LINES[l]);
    if (l < LINES.length-1){
      await new Promise(r=>setTimeout(r, BETWEEN_LINES));
      lineEl.textContent = ''; // clear before next line
    }
  }
  await new Promise(r=>setTimeout(r, HOLD_AFTER_BLOCK));

  // trigger 3x flicker (5s total via CSS)
  hero.classList.add('flicker');
  await new Promise(r=>setTimeout(r, 5000)); // duration must match CSS
  hero.classList.remove('flicker');

  // reset and loop
  lineEl.textContent = '';
  await new Promise(r=>setTimeout(r, LOOP_DELAY));
  runBlock();
}

runBlock();
