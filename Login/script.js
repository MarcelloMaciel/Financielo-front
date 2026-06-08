const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// ── Login com credenciais mock ──────────────────────────
const MOCK_EMAIL = 'adm123@gmail.com';
const MOCK_SENHA = '123456';

document.getElementById('btnLogin').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const senha = document.getElementById('loginSenha').value;
    const erro  = document.getElementById('loginErro');

    if (email === MOCK_EMAIL && senha === MOCK_SENHA) {
        erro.style.display = 'none';
        window.location.href = 'usuarios.html';
    } else {
        erro.style.display = 'block';
    }
});
// Defina sua BASE_URL apontando para o seu backend
const BASE_URL = 'http://localhost:8080/api/usuarios'; 

// Sua função de integração com a API
async function create(data) {
    const res = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Erro ${res.status}`);
    return res.json();
}

// Captura o formulário de registro
const formRegistro = document.querySelector('.sign-up form');

formRegistro.addEventListener('submit', async (event) => {
    // 1. Evita que a página seja recarregada ao clicar no botão
    event.preventDefault(); 

    // 2. Captura os valores que o usuário digitou
    const nome = document.getElementById('registroNome').value;
    const email = document.getElementById('registroEmail').value;
    const senha = document.getElementById('registroSenha').value;

    // 3. Monta o objeto de dados (o JSON que vai pro back-end)
    const data = {
        nome: nome,
        email: email,
        senha: senha
    };

    // 4. Chama a função create e lida com a resposta
    try {
        const resposta = await create(data);
        console.log('Usuário registrado:', resposta);
        
        // Exibe mensagem de sucesso e limpa os campos
        alert('Conta criada com sucesso!');
        formRegistro.reset();
        
        // Opcional: Acionar o botão que move a tela de volta para o login
        // document.getElementById('login').click(); 

    } catch (error) {
        console.error('Falha na requisição:', error);
        alert('Erro ao criar a conta. Verifique os dados ou se a API está rodando.');
    }
});