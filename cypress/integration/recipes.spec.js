/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Can find one element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
