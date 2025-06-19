class AccountSettingsPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.get('#change-password').check(); // check the box
  }

  changePassword(currentPassword, newPassword) {
    cy.get('#current-password').type(currentPassword);
    cy.get('#password').type(newPassword);
    cy.get('#password-confirmation').type(newPassword);
    cy.get('button[title="Save"]').click();
  }
}

export default AccountSettingsPage;
