
// Função para validar o acesso na tela de login
function acessar() {
    // Obtém os valores dos campos de email e senha
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    // Verifica se os campos estão preenchidos
    if (!loginEmail || !loginSenha) {
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor preencher todos os campos");
    } else {
        // Se ambos os campos estiverem preenchidos, redireciona para a página de cadastro
        window.location.href = "cadastro.html";
    }
}

// Array que armazena a lista de nomes de usuários e emails
var dadosLista = [];
var EmailLista = [];

// Função para salvar o nome e email do usuário na lista
function salvarUser() {
    // Obtém o valor dos campos de nome de usuário e email
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;

    // Verifica se os campos não estão vazios
    if (nomeUser && emailUser) {
        // Adiciona o nome e email aos arrays
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        // Atualiza a lista exibida na tela
        criarLista();
        // Limpa os campos de nome e email
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
    } else {
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor informar o nome e o email");
    }
}

// Função para criar e atualizar a lista de usuários na tela
function criarLista() {
    // Cria o cabeçalho da tabela
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";

    // Itera sobre todos os nomes e emails na lista
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td><button type='button' onclick='editar(" + i + ")' class='btn-rosa'>Editar</button><button type='button' onclick='excluir(" + i + ")' class='btn-rosa'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById("tabela").innerHTML = tabela;
}

// Função para editar um nome e email na lista
function editar(i) {
    // Preenche os campos com o nome e email selecionados para edição
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = EmailLista[i];
    // Remove o item da lista de dados e email
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    // Atualiza a lista exibida na tela após a remoção
    criarLista();
}

// Função para excluir um nome e email na lista
function excluir(i) {
    // Remove o item da lista de dados e email
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    // Atualza a lista exibida na tela após a remoção
    criarLista();
}

// Função para validar o email
function checarEmail() {
    // Obtém o valor do campo de email
    let email = document.forms[0].email.value;

    // Verifica se o campo de email está vazio ou não contém '@' ou '.'
    if (email === "" || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        // Se alguma das condições acima for verdadeira, exibe um alerta
        alert("Por favor, informe um e-mail válido");
        // Retorna false para evitar o envio do formulário
        return false;
    } else {
        // Se o email é válido, exibe um alerta de sucesso
        alert("Email informado com sucesso");
        // Atualiza o conteúdo de um elemento com o valor do email inserido
        document.getElementById('email').innerHTML = email;
    }
}
