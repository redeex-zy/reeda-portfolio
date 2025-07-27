const typing = document.getElementById('typing');
const text = 'Mohamed Rèda Mejhed — Cybersecurity Portfolio';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
