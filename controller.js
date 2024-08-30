// Função para validar o acesso na tela de login
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
    }
}

// Arrays que armazenam a lista de nomes de usuários, emails e CPFs
var dadosLista = [];
var EmailLista = [];
var cpfLista = [];

// Função para salvar o nome, email e CPF do usuário na lista
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let cpfUser = document.getElementById("cpfUser").value;

    if (nomeUser && emailUser && validarCPF(cpfUser)) {
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        cpfLista.push(cpfUser);
        criarLista(); // Atualiza a lista exibida na tela
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
        document.getElementById("cpfUser").value = "";
    } else {
        alert("Favor preencher todos os campos corretamente.");
    }
}

// Função para criar e atualizar a lista de usuários na tela
function criarLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + cpfLista[i] + "</td>" +
            "<td><button type='button' onclick='editar(" + i + ")' class='btn-rosa'>Editar</button>" +
            "<button type='button' onclick='excluir(" + i + ")' class='btn-rosa'>Excluir</button></td></tr>";
    }

    document.getElementById("tabela").innerHTML = tabela;
}

// Função para editar um nome, email e CPF na lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = EmailLista[i];
    document.getElementById('cpfUser').value = cpfLista[i];

    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);
}

// Função para excluir um nome, email e CPF da lista
function excluir(i) {
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);

    criarLista();
}

// Função para validar o e-mail
function validarEmail() {
    let email = document.getElementById("emailUser").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Por favor, informe um e-mail válido");
        return false;
    } else {
        alert("Email informado com sucesso");
        return true;
    }
}

// Função para validar o CPF
function validarCPF(cpf) {
    let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regex.test(cpf)) {
        alert("CPF inválido. Utilize o formato XXX.XXX.XXX-XX");
        return false;
    } else {
        alert("CPF válido");
        return true;
    }
}
