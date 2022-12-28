Cypress.Commands.add('acessarHomePage', () => {
  cy.visit('/');
});

Cypress.Commands.add('realizarLogin', () => {
  cy.acessarHomePage();
  cy.preencherEmail(Cypress.env('USERNAME'));
  cy.preencherSenha(Cypress.env('SENHA'));
  cy.clicarEntrar();
});
