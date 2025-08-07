const typing = document.getElementById('typing');
const text = 'Redeex — Cybersecurity Portfolio';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
