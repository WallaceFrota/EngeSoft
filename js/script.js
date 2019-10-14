function validar() {
	var nome = form1.nome.value; //Valida o input nome.
    if (nome == ""){
    alert ('Preencha o campo com seu nome');
    form1.nome.focus();
    return false;
    
}
   var txtMsg = form1.txtMsg.value; //Valida o campo de mensagem
   if (txtMsg == ""){
   alert ('Digite no campo mensagem');
   form1.txtMsg.focus();
   return false;
}
   var opcoes = form1.opcoes.value; // Valida a escolha das opções
   if ( opcoes == 0){
   alert ('Escolha uma opção');
   form1.opcoes.focus();
   return false;
}
   alert ('Pronto! Formulário Enviado.')
   form1.submit();
}