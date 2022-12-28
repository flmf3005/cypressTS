Cypress.Commands.add('validaUrl', (url: string) => {
  cy.url().should('eq', url);
});

Cypress.Commands.add('validaMensagemErroExibida', () => {
  cy.mensagemErro().should('be.visible');
});

Cypress.Commands.add('validaTextoMensagemErro', (mensagem: string) => {
  cy.mensagemErro().should('have.text', mensagem);
});

Cypress.Commands.add('validaModalNovoContatoExibido', () => {
  cy.modalNovoContato().should('be.visible');
});

Cypress.Commands.add('validaSeCartaoExibido', (numero: string) => {
  cy.cartaoContemNumero(numero).should('be.visible');
});
