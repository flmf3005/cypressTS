//Seletores HomePage

Cypress.Commands.add('emailInput', () => {
  cy.get('[name="email"]');
});

Cypress.Commands.add('senhaInput', () => {
  cy.get('[name="password"]');
});

Cypress.Commands.add('entrarButton', () => {
  cy.get('[id="sigIn"]');
});

Cypress.Commands.add('mensagemErro', () => {
  cy.get('[class="message-body"]');
});

//Seletores DashboardPage

Cypress.Commands.add('adicionarNovoContato', () => {
  cy.get('[data-cy="addNewContact"]');
});

Cypress.Commands.add('modalNovoContato', () => {
  cy.get('[class="modal-card"]');
});

Cypress.Commands.add('nomeInput', () => {
  cy.get('[data-cy="name"]');
});

Cypress.Commands.add('whatsappInput', () => {
  cy.get('[data-cy="number"]');
});

Cypress.Commands.add('assuntoInput', () => {
  cy.get('[data-cy="description"]');
});

Cypress.Commands.add('cadastrarButton', () => {
  cy.get('[data-cy="saveButton"]');
});

Cypress.Commands.add('cartaoContemNumero', (numero: string) => {
  cy.get('[class="subtitle is-6"').contains(numero);
});

Cypress.Commands.add('todosCartoes', () => {
  cy.get('[class="subtitle is-6"');
});

Cypress.Commands.add('numeroBuscaInput', () => {
  cy.get('[placeholder="Número do Whats"]');
});

Cypress.Commands.add('buscarButton', () => {
  cy.get('[class="button is-primary"]');
});
