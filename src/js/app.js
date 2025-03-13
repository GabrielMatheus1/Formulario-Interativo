/* da promeira sessao do formulario p/ segunda */
const inputName = document.getElementById('nome');
const botaoUmForm = document.getElementById('next-btn1');

/* loading de troca de passos */
function loadFormulario() {
    
    const loadingScreen = document.querySelector('.load-form');
    
    loadingScreen.style.display = 'flex';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
}

inputName.addEventListener('input', () => {
    
    if (inputName.value.length >= 3) {
        botaoUmForm.disabled = false;
    } else {
        botaoUmForm.disabled = true;
    }
});

const stepUm = document.querySelector('#step-1');
const stepDois = document.querySelector('#step-2');

botaoUmForm.addEventListener('click', () => {
  
  if (inputName.value.length !== " ") {
    loadFormulario();
    stepUm.classList.remove('active');
    stepDois.classList.add('active');
    }
});

/* da segunda sessao do formulario p/ terceira */
const inputPhone = document.getElementById('phone');
const botaoDoisFormBack = document.getElementById('back-btn2');
const botaoDoisFormNext = document.getElementById('next-btn2');
const stepTres = document.querySelector('#step-3');

botaoDoisFormBack.addEventListener('click', () => {
    
    stepDois.classList.remove('active');
    stepUm.classList.add('active');
    
});


inputPhone.addEventListener('input', () => {

  if (inputPhone.value.length === 11) {
    botaoDoisFormNext.disabled = false;
  } else {
    botaoDoisFormNext.disabled = true;
    }
});

botaoDoisFormNext.addEventListener('click', () => {

    const  phone = inputPhone.value;
    
    if(phoneValide(phone)){
        loadFormulario();
        stepDois.classList.remove('active');
        stepTres.classList.add('active');
    }
});

function phoneValide(inputPhone) {
  
    const regex = /^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}\d{4}$/;
    return regex.test(inputPhone);
}

/* da terceira sessao do formulario p/ quarta e ultima */
const inputEmail = document.getElementById('email');
const botaoTresFormBack = document.getElementById('back-btn3');
const botaoTresFormNext = document.getElementById('submit-btn');
const stepQuatro = document.querySelector('#step-4');



inputEmail.addEventListener('input', () => {

    if (inputEmail.value.length >= 1 ) {
        botaoTresFormNext.disabled = false;
        document.querySelector('#nonee').removeAttribute('required');
    } else {
        botaoTresFormNext.disabled = true;
    }
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email);
}

botaoTresFormNext.addEventListener('click', () => {
    
    var  email = inputEmail.value;
    
    if (validarEmail(email)) {
        loadFormulario();
        stepTres.classList.remove('active');
        document.querySelector('#form h2').style.display = 'none';
        stepQuatro.classList.add('active');
    }
});

botaoTresFormBack.addEventListener('click', () => {
    
    stepTres.classList.remove('active');
    stepDois.classList.add('active');
});

var form = document.getElementById('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(response => response.json())
    .then(data => {
    });
});
