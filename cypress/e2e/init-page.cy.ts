describe('go to init page', () => {
  it('initial', () => {
    cy.visit('http://127.0.0.1:5173');
    cy.get('[data-testid="paginator"]').should('exist');
  });
});
