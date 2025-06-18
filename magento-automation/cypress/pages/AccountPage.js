class AccountPage {
  logout() {
    cy.get('.customer-welcome').first().click();

    cy.contains('Sign Out').should('be.visible').click();
  }
}

export default AccountPage;
