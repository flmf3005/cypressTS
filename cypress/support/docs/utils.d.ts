export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Navega para a HomePage
       *
       * Located at support/commands/utils.js
       * @example
       * cy.accessHomePage();
       *
       * @default
       * cy.visit('/');
       *
       */
      acessarHomePage(): Chainable<any>;

      /**
       * Realiza Login com os dados corretos
       *
       * Located at support/commands/utils.js
       * @example
       * cy.realizarLogin();
       *
       * @default
       * cy.acessarHomePage();
       * cy.preencherEmail(Cypress.env('USERNAME'));
       * cy.preencherSenha(Cypress.env('SENHA'));
       * cy.clicarEntrar();
       *
       */
      realizarLogin(): Chainable<any>;
    }
  }
}
