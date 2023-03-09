let firstTitle = document.getElementById('firstTitle');
let firstSubTitle = document.getElementById('firstSubTitle')
let splashScreen = document.getElementById('splashScreen')


splashScreen.style.display = "none"


setTimeout(() => {
  firstTitle.classList.add('titleAnimate')
}, 1200);

setTimeout(() => {
  firstSubTitle.classList.add('titleAnimate')
}, 1300);