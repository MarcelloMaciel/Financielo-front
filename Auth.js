// Mock de autenticação — bypass para desenvolvimento
const MOCK_USER = {
  id: 1,
  nome: 'Admin Financielo',
  email: 'admin@financielo.com',
  perfil: 'ADMIN',
  token: 'mock-token-bypass-dev',
};

export function getLoggedUser() {
  return MOCK_USER;
}

export function isAuthenticated() {
  return true;
}
