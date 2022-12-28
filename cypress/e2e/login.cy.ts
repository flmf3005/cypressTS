describe('Testes de Login', () => {
  beforeEach(() => {
    cy.acessarHomePage();
  });

  describe('Login Correto', () => {
    it('devo ser direcionado para a tela de Dashboard', () => {
      cy.preencherEmail(Cypress.env('USERNAME'));
      cy.preencherSenha(Cypress.env('SENHA'));
      cy.clicarEntrar();
      cy.validaUrl('http://localhost:8080/dashboard');
    });
  });

  describe('Login incorreto', () => {
    it('quando preencho senha incorreta devo visualizar mensagem de erro', () => {
      cy.preencherEmail(Cypress.env('USERNAME'));
      cy.preencherSenha('123');
      cy.clicarEntrar();
      cy.validaMensagemErroExibida();
      cy.validaTextoMensagemErro(' Email e/ou senha incorreto ');
    });

    it('quando não preencho os dados de login devo visualizar mensagem de erro', () => {
      cy.clicarEntrar();
      cy.validaMensagemErroExibida();
      cy.validaTextoMensagemErro(' Oops. por favor informe seu e-mail ');
    });

    it('quando preencho somente o email devo visualizar mensagem de erro', () => {
      cy.preencherEmail(Cypress.env('USERNAME'));
      cy.clicarEntrar();
      cy.validaMensagemErroExibida();
      cy.validaTextoMensagemErro(' Oops. por favor informe sua senha ');
    });

    it('quando preencho somente a senha devo visualizar mensagem de erro', () => {
      cy.preencherSenha(Cypress.env('SENHA'));
      cy.clicarEntrar();
      cy.validaMensagemErroExibida();
      cy.validaTextoMensagemErro(' Oops. por favor informe seu e-mail ');
    });
  });

  afterEach(() => {
    cy.screenshot();
  });
});
