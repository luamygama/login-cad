
// Função para validar o acesso na tela de login
function acessar() {
    // Obtém os valores dos campos de email e senha
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
    let logincpf = document.getElementById("loginCpf").value; // Adicionei a variável logincpf

    if (!loginEmail || !loginSenha || !logincpf) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }
}

// Arrays que armazenam a lista de nomes de usuários, emails e CPFs
var dadosLista = [];
var EmailLista = [];
var cpfLista = [];

// Função para salvar o nome, email e CPF do usuário na lista
function salvarUser() {
    // Obtém os valores dos campos de nome de usuário, email e CPF
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
    // Cria o cabeçalho da tabela
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";

    // Itera sobre todos os nomes, emails e CPFs na lista
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + cpfLista[i] + "</td>" +
            "<td><button type='button' onclick='editar(" + i + ")' class='btn-rosa'>Editar</button>" +
            "<button type='button' onclick='excluir(" + i + ")' class='btn-rosa'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById("tabela").innerHTML = tabela;
}

// Função para editar um nome, email e CPF na lista
function editar(i) {
    // Preenche os campos com o nome, email e CPF selecionados para edição
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = EmailLista[i];
    document.getElementById('cpfUser').value = cpfLista[i];

    // Remove o item da lista para evitar duplicação
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);
}

// Função para excluir um nome, email e CPF da lista
function excluir(i) {
    // Remove o item da lista de dados, email e CPF
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);

    // Atualiza a lista exibida na tela
    criarLista();
}

// Função para validar o email
function validarEmail() {
    let email = document.forms[0].email.value;

    // Verifica se o campo de email está vazio ou não contém '@' ou '.'
    if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        // Se alguma das condições acima for verdadeira, exibe um alerta
        alert("Por favor, informe um e-mail válido");
        return false;
    } else {
        alert("Email informado com sucesso");
        document.getElementById('email').innerHTML = email;
        return true;
    }
}
//###############################################################################################################



// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        alert("CPF inválido"); // Adiciona alerta se o CPF não for válido
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do 1º dígito verificador (10º dígito)
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido"); // Adiciona alerta se o CPF não for válido
        return false;
    }

    // Validação do 2º dígito verificador (11º dígito)
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido"); // Adiciona alerta se o CPF não for válido
        return false;
    }

    return true; // Retorna true se o CPF é válido
}
