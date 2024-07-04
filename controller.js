//Validar acesso em tela de login

    function acessar (){
        let loginEmail = document.getElementById("loginEmail").value;
        let loginSenha = document.getElementById("loginSenha").value;

        if(!loginEmail || !loginSenha)
            alert("Favor preencher todos os campos");
    }