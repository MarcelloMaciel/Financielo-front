// Aguarda o HTML da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // === LÓGICA DO BOTÃO "ENTRAR" ===
    // A melhor prática é ouvir o evento "submit" do formulário inteiro, e não o clique do botão
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            // Impede a página de recarregar
            event.preventDefault(); 
            
            // Pega o valor digitado nos campos
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            
            console.log('Validando acesso...', { email });
            alert(`Tentativa de login processada para o usuário: ${email}`);
            // Aqui entraria a conexão com seu banco de dados ou API de autenticação (Backend)
        });
    }

    // === LÓGICA DO LINK "AINDA NÃO POSSUI CADASTRO ?" ===
    const linkCadastro = document.getElementById('link-cadastro');
    if (linkCadastro) {
        linkCadastro.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link de pular para o topo da página (efeito do href="#")
            
            // Redireciona o usuário para a página de registro
            window.location.href = 'resgistro.html'; 
        });
    }

    // === LÓGICA DO LINK "ESQUECEU SUA SENHA ?" ===
    const linkEsqueciSenha = document.getElementById('link-esqueci-senha');
    if (linkEsqueciSenha) {
        linkEsqueciSenha.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecionando para o processo de recuperação de senha...');
        });
    }
});