function exibir(){
	alert("Engenharia da Computação");
}


	function validarFormulario(){
		var nome = document.getElementById("txtNome");
		var email = document.getElementById("txtEmail");
		var comentario = document.getElementById("txtComentario");


		if(nome.value==""){
			alert("Nome não informado!");
			nome.focus();
			nome.style.backgroundColor = "#FF0000";
		}else{
			if (email.value=="") {
				alert("Email não informado!");
				email.focus();
				email.style.backgroundColor = "#FF0000";
			}else{
				if (comentario.value=="") {
					alert("Nenhum comentario foi digitado!")
					comentario.focus();
					comentario.style.backgroundColor = "#FF0000";
				}
			}
		}

			if (nome.value != "" && email.value != "" && comentario.value != "") {
				
			}
	}


	

		