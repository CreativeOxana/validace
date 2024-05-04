const email = prompt('Zadejte svůj email: ');
const msgElm = document.querySelector('.msg');

if (validator.isEmail(email)) {
  msgElm.textContent = 'E-mail v pořádku';
  msgElm.classList.add('msg--valid');
} else {
  msgElm.textContent = 'Neplatný e-mail';
  msgElm.classList.add('msg--invalid');
}

// const card = prompt('Zadejte číslo své karty: ');
// const msgElm = document.querySelector('.msg');

// if (validator.isCreditCard(card)) {
//   msgElm.textContent = 'Platné číslo platební karty';
//   msgElm.classList.add('msg--valid');
// } else {
//   msgElm.textContent = 'Neplatné číslo platební karty';
//   msgElm.classList.add('msg--invalid');
// }
