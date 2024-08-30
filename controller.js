// Arrays que armazenam a lista de nomes de usuários, emails e CPFs
var dadosLista = [];
var EmailLista = [];
var cpfLista = [];

// Função para validar o e-mail
function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do e-mail
    return regex.test(email);
}

// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF inválido
    }

    let soma = 0;
    let resto;

    // Validação do 1º dígito verificador (10º dígito)
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Validação do 2º dígito verificador (11º dígito)
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true; // CPF válido
}

// Função para salvar o nome, email e CPF do usuário na lista
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let cpfUser = document.getElementById("cpfUser").value;

    if (nomeUser && validarEmail(emailUser) && validarCPF(cpfUser)) {
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
    let tabela = "";
    // Itera sobre todos os nomes, emails e CPFs na lista
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + cpfLista[i] + "</td>" +
            "<td><button type='button' onclick='editar(" + i + ")' class='btn-rosa'>Editar</button>" +
            "<button type='button' onclick='excluir(" + i + ")' class='btn-rosa'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.querySelector("#tabela tbody").innerHTML = tabela;
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
    criarLista(); // Atualiza a lista após a remoção
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
