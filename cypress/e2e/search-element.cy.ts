describe('go to init page', () => {
  it('initial', () => {
    cy.visit('http://127.0.0.1:5173');

    let submitted: boolean;
    cy.get('form').invoke('submit', (e: any) => {
      e.preventDefault();
      submitted = true;
    });

    cy.get('form').within(() => {
      cy.get('input').type('rick');
      cy.get('button[type=submit]')
        .click()
        .then(() => {
          expect(submitted).to.be.true;
        });
    });
  });
});
