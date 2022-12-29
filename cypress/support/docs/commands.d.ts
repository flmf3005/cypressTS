export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Preenche o campo de e-mail com o parâmetro 'email'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherEmail('teste@teste.com');
       *
       * @default
       * cy.emailInput().type(email);
       *
       * @param email string
       *
       */
      preencherEmail(email: string): Chainable<any>;

      /**
       * Preenche o campo de senha com o parâmetro 'senha'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherSenha('senha123');
       *
       * @default
       * cy.senhaInput().type(senha);
       *
       * @param senha string
       *
       */
      preencherSenha(senha: string): Chainable<any>;

      /**
       * Clica no botão Entrar
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.clicarEntrar();
       *
       * @default
       * cy.entrarButton().click();
       *
       */
      clicarEntrar(): Chainable<any>;

      /**
       * Clica no botão Adicionar Novo Contato
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.clicarAdicionarContato();
       *
       * @default
       * cy.adicionarNovoContato().click();
       *
       */
      clicarAdicionarContato(): Chainable<any>;

      /**
       * Preenche o campo Nome com o parâmetro 'nome'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherNome('Teste');
       *
       * @default
       * cy.nomeInput().type(nome);
       *
       * @param nome
       *
       */
      preencherNome(nome: string): Chainable<any>;

      /**
       * Preenche o campo Whatsapp com o parâmetro 'number'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherWhatsapp('99999999');
       *
       * @default
       * cy.whatsappInput().type(number);
       *
       * @param number
       *
       */
      preencherWhatsapp(number: string): Chainable<any>;

      /**
       * Preenche o campo Assunto com o parâmetro 'assunto'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherAssunto('Realizar Teste');
       *
       * @default
       * cy.assuntoInput().type(assunto);
       *
       * @param assunto
       *
       */
      preencherAssunto(assunto: string): Chainable<any>;

      /**
       * Clica no botão Cadastrar
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.clicarCadastrar();
       *
       * @default
       * cy.cadastrarButton().click();
       *
       */
      clicarCadastrar(): Chainable<any>;

      /**
       * Preenche o input Numero do Whatsapp de Busca com o parâmetro 'numero'
       *
       * Located at support/commands/commands.ts
       * @example
       * cy.preencherNumeroBusca('91239456');
       *
       * @default
       * cy.numeroBuscaInput().type(numero);
       *
       * @param numero
       *
       */
      preencherNumeroBusca(numero: string): Chainable<any>;
    }
  }
}
