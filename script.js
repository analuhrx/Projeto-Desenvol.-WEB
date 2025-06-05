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
