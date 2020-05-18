Given('I am on the "Swaglabs" login page', (page) => {
  cy.visit("/")  //Base url is stored in cypress.json file :)
  cy.url().should( 'include', 'saucedemo')
  // cy.url().invoke('split', "www.").should( domain => {
  //   expect(domain.pop()).to.eql('saucedemo.com/')
  // })
})

When('I go to checkout', () => {
  cy.get('#shopping_cart_container').click()
  cy.contains('CHECKOUT').click()
});

When('I should end up on the checkout page', () => {
 cy.contains('Checkout').should('have.text', "Checkout: Your Information")
});