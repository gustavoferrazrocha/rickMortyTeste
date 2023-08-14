describe('Teste de busca e paginação', () => {
  it('Realiza uma busca, rola até o final da página, seleciona filtros e avança na paginação', () => {
    cy.visit('');

    cy.get('input[id="input-0"]').click();

    cy.get('input[id="input-0"]').type('rick');

    cy.scrollTo('bottom')

    cy.get('.v-pagination__next').dblclick();

    cy.scrollTo('top')

    cy.get('input[id="input-2"]').click({force: true});

    cy.get('.v-list-item').contains('Alive').click({force: true});

    cy.get('input[id="input-0"]').click();

    cy.get('input[id="input-0"]').type('{selectAll} {backspace} morty');

    cy.scrollTo('bottom')

    cy.get('.v-pagination__next').dblclick();
  });
});
