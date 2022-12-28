export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Seleciona o input de e-mail
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.emailInput();
       *
       * @default
       * cy.get('email');
       *
       */
      emailInput(): Chainable<any>;

      /**
       * Seleciona o input de senha
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.senhaInput();
       *
       * @default
       * cy.get('password');
       *
       */
      senhaInput(): Chainable<any>;

      /**
       * Seleciona o botão Entrar
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.entrarButton();
       *
       * @default
       * cy.get('[id="sigin"]');
       *
       */
      entrarButton(): Chainable<any>;

      /**
       * Seleciona a mensagem de erro
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.mensagemErro();
       *
       * @default
       * cy.get('message is-danger');
       *
       */
      mensagemErro(): Chainable<any>;

      /**
       * Seleciona o botão Adicionar Novo Contato
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.incluirNovoContato();
       *
       * @default
       * cy.get('[data-cy="addNewContact"]');
       *
       */
      adicionarNovoContato(): Chainable<any>;

      /**
       * Seleciona o modal de Novo Contato
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.modalNovoContato();
       *
       * @default
       * cy.get('[class="modal-card"]');
       *
       */
      modalNovoContato(): Chainable<any>;

      /**
       * Seleciona o input de Nome
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.nomeInput();
       *
       * @default
       * cy.get('[data-cy="name"]');
       *
       */
      nomeInput(): Chainable<any>;

      /**
       * Seleciona o input de Whatsapp
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.whatsappInput();
       *
       * @default
       * cy.get('[data-cy="number"]');
       *
       */
      whatsappInput(): Chainable<any>;

      /**
       * Seleciona o input de assunto
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.assuntoInput();
       *
       * @default
       * cy.get('[data-cy="description"]');
       *
       */
      assuntoInput(): Chainable<any>;

      /**
       * Seleciona o botão Cadastrar
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.cadastrarButton();
       *
       * @default
       * cy.get('[data-cy="saveButton"]');
       *
       */
      cadastrarButton(): Chainable<any>;

      /**
       * Seleciona o cartão de contato que contem o numero informado no parâmetro 'numero'
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.cartaoContemNumero('91239456');
       *
       * @default
       * cy.get('[class="subtitle is-6"').contains(numero);
       *
       * @param numero
       *
       */
      cartaoContemNumero(numero: string): Chainable<any>;

      /**
       * Busca todos os cartões de contato
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.todosCartoes();
       *
       * @default
       * cy.get('[class="subtitle is-6"');
       *
       * @param numero
       *
       */
      todosCartoes(): Chainable<any>;

      /**
       * Seleciona o input de Busca do Numero do Whatsapp
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.numeroBuscaInput();
       *
       * @default
       * cy.get('[placeholder="Número do Whats"]');
       *
       */
      numeroBuscaInput(): Chainable<any>;

      /**
       * Seleciona o botão Buscar
       *
       * Located at support/commands/selectors.ts
       * @example
       * cy.buscarButton();
       *
       * @default
       * cy.get('[class="button is-primary"]');
       *
       */
      buscarButton(): Chainable<any>;
    }
  }
}
