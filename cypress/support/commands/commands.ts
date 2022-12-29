Cypress.Commands.add('preencherEmail', (email: string) => {
  cy.emailInput().type(email);
});

Cypress.Commands.add('preencherSenha', (senha: string) => {
  cy.senhaInput().type(senha);
});

Cypress.Commands.add('clicarEntrar', () => {
  cy.entrarButton().click();
});

Cypress.Commands.add('clicarAdicionarContato', () => {
  cy.adicionarNovoContato().click();
});

Cypress.Commands.add('preencherNome', (nome: string) => {
  cy.nomeInput().type(nome);
});

Cypress.Commands.add('preencherWhatsapp', (number: string) => {
  cy.whatsappInput().type(number);
});

Cypress.Commands.add('preencherAssunto', (assunto: string) => {
  cy.assuntoInput().type(assunto);
});

Cypress.Commands.add('clicarCadastrar', () => {
  cy.cadastrarButton().click();
});

Cypress.Commands.add('preencherNumeroBusca', (numero: string) => {
  cy.numeroBuscaInput().type(numero);
});
