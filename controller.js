//Validar acesso em tela de login

    function acessar (){
        let loginEmail = document.getElementById("loginEmail").value;
        let loginSenha = document.getElementById("loginSenha").value;

        if(!loginEmail || !loginSenha){
            alert("Favor preencher todos os campos");
        }else{
          //  alert("Campos preenchidos com sucesso");
          window.location.href = "cadastro.html";
        }
        
    }


    // FUNÇAO QUE ARMAZENA EM ARRAY NOME NA TELA DE CASDASTRO

    var dadosLista = [];

    function salvarUser(){
        let nomeUser = document.getElementById("nomeUser").value;

        if(nomeUser){
            dadosLista.push(nomeUser);
            console.log(dadosLista);
            document.getElementById("nomeUser").value = "";

        }else{
            alert("Favor informa o nome cadastrado");
        }
    }