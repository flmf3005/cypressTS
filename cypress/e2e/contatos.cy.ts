describe('Adicionar Novo Contato', () => {
  it('ao clicar em novo contato devo visualizar o modal de criação', () => {
    cy.realizarLogin();
    cy.clicarAdicionarContato();
    cy.validaModalNovoContatoExibido();
  });

  it('ao criar um novo contato devo visualizar o cartão na lista de cartões', () => {
    cy.realizarLogin();
    cy.clicarAdicionarContato();
    cy.preencherNome('Teste');
    cy.preencherWhatsapp('91239456');
    cy.preencherAssunto('Assunto Teste');
    cy.clicarCadastrar();
    cy.validaSeCartaoExibido('91239456');
  });

  it('ao buscar um contato somente um card deve ser exibido', () => {
    cy.realizarLogin();
    cy.preencherNumeroBusca('985555555');
    cy.buscarButton().click();
    cy.todosCartoes().should('have.length', 1);
  });
});
