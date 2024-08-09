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

// Array que armazena a lista de nomes de usuários
var dadosLista = [];

// Função para salvar o nome do usuário na lista
function salvarUser() {
    // Obtém o valor do campo de nome de usuário
    let nomeUser = document.getElementById("nomeUser").value;

    // Verifica se o campo de nome não está vazio
    if (nomeUser) {
        // Adiciona o nome ao array de dadosLista
        dadosLista.push(nomeUser);
        // Atualiza a lista exibida na tela
        criarLista();
        // Limpa o campo de nome de usuário
        document.getElementById("nomeUser").value = "";
    } else {
        // Se o campo estiver vazio, exibe um alerta
        alert("Favor informa o nome cadastrado");
    }
}

// Função para criar e atualizar a lista de usuários na tela
function criarLista() {
    // Cria o cabeçalho da tabela
    let tabela = "<tr><th> Nome Usuário</th><th>Ações</th></tr>";

    // Itera sobre todos os nomes na lista de dados
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        // Adiciona uma nova linha para cada nome com um botão de editar
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)' class='btn-rosa'>Editar</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById("tabela").innerHTML = tabela;
}

// Função para editar um nome na lista
function editar(i) {
    // Preenche o campo de nome com o nome selecionado para edição
    document.getElementById('nomeUser').value = dadosLista[i - 1];
    // Remove o nome da lista
    dadosLista.splice(i - 1, 1);
    // Atualiza a lista exibida na tela após a remoção
    criarLista();
}
