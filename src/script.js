// script.js
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
});



/* Selecionando todos os elementos img, img botao*/
const slider = document.querySelectorAll('.slider');
const btnback = document.getElementById('botaoback');
const btnnext = document.getElementById('botaonext');
const indicadores = document.querySelectorAll('.indicador');


/* slider que estar ativo / on*/
let currentSlide = 0;


/* funções*/

/* Esconder as imagens*/
function hideslider (){                  /*remover*/
    slider.forEach(img => img.classList.remove('on'));
}

/* Exibe imagem atual */
function showslider(){
    slider[currentSlide].classList.add('on');
    updateIndicators();
}

// Atualiza estilo dos indicadores
function updateIndicators() {
    indicadores.forEach((dot, index) => {
      dot.classList.toggle('ativo', index === currentSlide);
    });
  }

/* se corrente for = 0 , anvaça para o proximo slide */
function nextSlider(){
    hideslider();
    currentSlide = (currentSlide + 1) % slider.length;
    showslider();
}
/* Volta para o slide anterior */
function backSlider(){
    hideslider();
    currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    showslider();
}

/* Eventos de clique nos botões*/
btnnext.addEventListener('click', nextSlider)
btnback.addEventListener('click', backSlider)

setInterval(nextSlider, 6000);



  





/*-------PAGINA DE CONTATO------*/
document.getElementById('formContato').addEventListener('submit', function(evento) {

    // Impede o envio do formulário
    evento.preventDefault();
   /*
    Foi adicionado um ouvinte de evento para o envio do formulário. 
    A função de callback impede o envio padrão do formulário,
    verifica se os campos estão preenchidos e se o email é válido usando uma expressão regular.
 
    Usamos aqui uma função de callback.
    Um callback é uma função passada como argumento a outra função
 
   */
    let nome= document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;
    let mensagemErro = '';
 
    /*
      acima criarmos uma variável para javascript e o getElementById('nome') onde fazemos referência ao compo do from Html(contato.html)
      bem como os demais campos do form.
 
      Lá no form criamos também uma tag Div para mesangem de erro.
    */
 
    if (nome=== '') {
        mensagemErro += 'O nome é obrigatório .\n';
    }
 
    if (email ==='') {
        mensagemErro += 'O e-mail é obrigatório.\n ';
    } else {
        // Verifica se o email é válido
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mensagemErro += 'O email não é válido. \n ';
        }
    }
    if (fone===''){
       mensagemErro += 'Sue Telefone é muito importante. Favor Informar  \n';
    }
 
    if (mensagemErro !== '') {
        //document.getElementById('mensagemErro').innerHTML = mensagemErro; // exibe a mensagem na página
        alert(mensagemErro);
    }else{
        // Se tudo certo, envio uma mensagem e chamo a página principal ou seja, Redireciona para a página principal
         alert('Mensagem enviada com sucesso!');
         window.location.href = 'index.html'; 
 
    } 
 
 });

//botão
function criarNota(e, simbolos) {
      const nota = document.createElement('div');
      nota.classList.add('nota');
      nota.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];

      const alvo = e.currentTarget;
      const rect = alvo.getBoundingClientRect();
      nota.style.left = (e.clientX - rect.left) + 'px';
      nota.style.top = (e.clientY - rect.top) + 'px';

      alvo.appendChild(nota);

      setTimeout(() => {
        nota.remove();
      }, 1000);
    }
