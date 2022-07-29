describe('go to init page', () => {
  it('Click next page', () => {
    cy.visit('http://127.0.0.1:5173');
    cy.contains('Next').click();
    cy.get('.rounded-l-md').should('contain', 'Previous');
  });
});
