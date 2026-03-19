export class LoginPage {
  constructor(page) {
    this.page = page;

    this.inputUsuario = '[data-testid="login-input"]';
    this.inputSenha = '[data-testid="login-pass"]';
    this.botaoContinuar = '[data-testid="submit-button"]';
  }

  async acessar() {
    await this.page.goto('https://login.anhanguera.com/');
  }

  async preencherUsuario(usuario) {
    await this.page.fill(this.inputUsuario, usuario);
  }

  async clicarContinuar() {
    await this.page.click(this.botaoContinuar);
  }

  async preencherSenha(senha) {
    await this.page.fill(this.inputSenha, senha);
  }

  async fazerLogin(usuario, senha) {
    await this.preencherUsuario(usuario);
    await this.clicarContinuar();
    await this.preencherSenha(senha);
  }
}