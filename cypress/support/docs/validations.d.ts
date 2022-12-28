export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Valida que a Url da página corresponde ao parâmetro 'url'
       *
       * Located at support/commands/validations.ts
       * @example
       * cy.validaUrl('http://localhost');
       *
       * @default
       * cy.url().should('eq', url);
       *
       * @param url string
       *
       */
      validaUrl(url: string): Chainable<any>;

      /**
       * Valida que a mensagem de erro é exibida
       *
       * Located at support/commands/validations.ts
       * @example
       * cy.validaMensagemErroExibida();
       *
       * @default
       * cy.mensagemErro().should('be.visible');
       *
       */
      validaMensagemErroExibida(): Chainable<any>;

      /**
       * Valida que o texto da mensagem de erro corresponde ao parâmetro 'mensagem'
       *
       * Located at support/commands/validations.ts
       * @example
       * cy.validaTextoMensagemErro('Deve ser informado e-mail');
       *
       * @default
       * cy.mensagemErro().should('have.text', mensagem);
       *
       * @param mensagem
       *
       */
      validaTextoMensagemErro(mensagem: string): Chainable<any>;

      /**
       * Valida que o modal de Novo Contato é exibido
       *
       * Located at support/commands/validations.ts
       * @example
       * cy.validaModalNovoContatoExibido();
       *
       * @default
       * cy.modalNovoContato().should('be.visible');
       *
       */
      validaModalNovoContatoExibido(): Chainable<any>;

      /**
       * Valida que o cartão que contém o número é exibido
       *
       * Located at support/commands/validations.ts
       * @example
       * cy.validaCartaoExibido('91239456');
       *
       * @default
       * cy.cartaoContemNumero(numero).should('be.visible');
       *
       * @param numero
       *
       */
      validaSeCartaoExibido(numero: string): Chainable<any>;
    }
  }
}
