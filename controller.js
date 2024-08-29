
// Função para validar o acesso na tela de login
function acessar() {
    // Obtém os valores dos campos de email e senha
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha || !logincpf) {
        alert("Favor preencher todos os campos");
    } else {
        window.location.href = "cadastro.html";
    }
}

// Array que armazena a lista de nomes de usuários e emails
var dadosLista = [];
var EmailLista = [];
var cpfLista = [];

// Função para salvar o nome e email do usuário na lista
function salvarUser() {
    // Obtém o valor dos campos de nome de usuário e email
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let cpfUser = document.getElementById("cpfUser").value;

    if (nomeUser && emailUser && cpfUser) {
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        cpfLista.push(cpfUser);
        criarLista(); // Atualiza a lista exibida na tela
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
        document.getElementById("cpfUser").value = "";
    } else {
        alert("Favor preencher todos os campos.");
    }
    
}

// Função para criar e atualizar a lista de usuários na tela
function criarLista() {
    // Cria o cabeçalho da tabela
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";

    // Itera sobre todos os nomes e emails na lista
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + cpfLista[i] + "</td>" +
                  "<td><button type='button' onclick='editar(" + i + ")' class='btn-rosa'>Editar</button>" +
                  "<button type='button' onclick='excluir(" + i + ")' class='btn-rosa'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById("tabela").innerHTML = tabela;
}

// Função para editar um nome e email na lista
function editar(i) {
    // Preenche os campos com o nome e email selecionados para edição
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = EmailLista[i];
    document.getElementById('cpfUser').value = cpfLista[i];
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);
    criarLista();
}

// Função para excluir um nome e email na lista
function excluir(i) {
    // Remove o item da lista de dados e email
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);
    criarLista();
}

function validarEmail() {
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
// Função para validar o email
function dadosLista() {
    // Verifica se o campo de email está vazio ou não contém '@' ou '.'
    if (document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
        
        // Se alguma das condições acima for verdadeira, exibe um alerta
        alert("Por favor, informe um e-mail válido");
        
        // Retorna false para evitar o envio do formulário
        return false;
    } else {
        // Se o email é válido, exibe um alerta de sucesso
        alert("Email informado com sucesso");
        
        // Atualiza o conteúdo de um elemento com o valor do email inserido
        document.getElementById('email').innerHTML = document.forms[0].email.value;
    }
}
// Adiciona um event listener para o evento 'submit' do formulário com ID 'cpfForm'
document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário
    
    // Obtém o valor do campo de CPF
    const cpf = document.getElementById("cpf").value;
    
    // Elemento onde será exibida a mensagem de validação
    const msg = document.getElementById("message");
 
    // Chama a função validarCPF e verifica se o CPF é válido
    if (validarCPF(cpf)) {
        msg.textContent = "O CPF é válido"; // Mensagem de CPF válido
        msg.style.color = 'green'; // Estilo para mensagem de sucesso
    } else {
        msg.textContent = "O CPF não é válido"; // Mensagem de CPF inválido
        msg.style.color = 'red'; // Estilo para mensagem de erro
    }
 });
 
// Adiciona um event listener para o evento 'submit' do formulário com ID 'cpfForm'
document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário
    
    // Obtém o valor do campo de CPF
    const cpf = document.getElementById("cpf").value;
    
    // Elemento onde será exibida a mensagem de validação
    const msg = document.getElementById("message");
 
    // Chama a função validarCPF e verifica se o CPF é válido
    if (validarCPF(cpf)) {
        msg.textContent = "O CPF é válido"; // Mensagem de CPF válido
        msg.style.color = 'green'; // Estilo para mensagem de sucesso
    } else {
        msg.textContent = "O CPF não é válido"; // Mensagem de CPF inválido
        msg.style.color = 'red'; // Estilo para mensagem de erro
    }
 });
 
 // Função para validar o CPF
 function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF
    
    // Verifica se o CPF não possui 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
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
        return false;
    }
 
    return true; // Retorna true se o CPF é válido
 }
 