const btn = document.getElementById('btn');
const cube = document.querySelector('.cube');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const top = document.querySelector('.top');
const bottom = document.querySelector('.bottom');
const nbrDiv = 7;

for (let i = 0; i < nbrDiv; i++) {
  const divTop = document.createElement('div');
  divTop.className = 'boxTop insideFace';
  divTop.style.left = `${(45) * i}px`;
  top.appendChild(divTop);
  
  const divBottom = document.createElement('div');
  divBottom.className = 'boxBottom insideFace';
  divBottom.style.left = `${(45) * i}px`;
  bottom.appendChild(divBottom);

  const divLeft = document.createElement('div');
  divLeft.className = 'boxLeft insideFace';
  divLeft.style.left = `${(45) * i}px`;
  left.appendChild(divLeft);
  
  const divRight = document.createElement('div');
  divRight.className = 'boxRight insideFace';
  divRight.style.left = `${(45) * i}px`;
  right.appendChild(divRight);
}

const pos = [-45, 0, 45, 90, 135, 180, 225];
let frameCount = 0;
const updateEveryNFrames = 5;

function animeAll(boxs) {
  if (frameCount % updateEveryNFrames === 0) {
    boxs.forEach((b, index) => {
      pos[index]++;
      b.style.left = `${pos[index]}px`;

      if (pos[index] >= (45 * (nbrDiv - 1))) {
        pos[index] = -45;
      }
    });
  }
  frameCount++;
  requestAnimationFrame(() => animeAll(boxs));
}
const boxsTop = document.querySelectorAll('.boxTop');
animeAll(boxsTop);
const boxsBottom = document.querySelectorAll('.boxBottom');
animeAll(boxsBottom);
const boxsLeft = document.querySelectorAll('.boxLeft');
animeAll(boxsLeft);
const boxsRight = document.querySelectorAll('.boxRight');
animeAll(boxsRight);

btn.addEventListener('mouseenter', () => {
  cube.className = 'cube animationCubeIn';
  setTimeout(() => {
    left.style.transitionDuration = '0.2s';
    left.style.height = '20px';
    left.style.borderTop = '1px solid #000';
    left.style.borderBottom = '1px solid #000';
    right.style.transitionDuration = '0.2s';
    right.style.height = '20px';
    right.style.borderTop = '1px solid #000';
    right.style.borderBottom = '1px solid #000';
    top.style.transitionDuration = '0.2s';
    top.style.height = '20px';
    top.style.borderTop = '1px solid #000';
    top.style.borderBottom = '1px solid #000';
    bottom.style.transitionDuration = '0.2s';
    bottom.style.height = '20px';
    bottom.style.borderTop = '1px solid #000';
    bottom.style.borderBottom = '1px solid #000';
  }, 100)
})
btn.addEventListener('mouseleave', () => {
  cube.className = 'cube animationCubeOut';
  setTimeout(() => {    
    left.style.height = '0';
    left.style.borderTop = 'none';
    left.style.borderBottom = 'none';
    right.style.height = '0';
    right.style.borderTop = 'none';
    right.style.borderBottom = 'none';
    top.style.height = '0';
    top.style.borderTop = 'none';
    top.style.borderBottom = 'none';
    bottom.style.height = '0';
    bottom.style.borderTop = 'none';
    bottom.style.borderBottom = 'none';
  }, 100)
})