/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  // https://on.cypress.io/interacting-with-elements

  it('Shows list and allows to click on the list and see recipe page', () => {
    // https://on.cypress.io/type
    const first = cy.get('.card:first .LinesEllipsis')
    first.should('have.text', 'White Cheddar Grilled Cheese with Cherry Preserves & Basil');
    first.click();

    const badge = cy.get('.badge.badge-secondary');
    badge.should('have.text', 'vegan');
  });
});
