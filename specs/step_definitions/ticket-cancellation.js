import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  cy.visit('./');
  cy.viewport(1200, 900);
});

When('I logg in as a member', () => {
  cy.wait(5000);

  cy.get('.myaccount-btn').click()

  cy.get('input[type="email"]').type("morkiyosto@gufum.com")
  cy.get('input[type="password"]').type("Filipsson123")

  cy.get('.Login-btn').click({ force: true });
});

When('I navigate to a movie booking', () => {
  cy.wait(5000);
  cy.get('header nav a[href="/filmer"]').click();
  cy.get('body > div > main > section > article:nth-child(6)').should('be.visible').click();
});

When('I confirm my seat selection', () => {
  cy.get('.screening-book-btn')
    .first()
    .click();

  cy.get('.seat-row').eq(1).find('.seat').eq(5).click();
});

When('I confirm the booking', () => {
  cy.get('.section-2')
    .find('button').click();

});

Then('I receive a confirmation', () => {
  cy.get('.confirm-button').contains('Bekräfta');

});


When('I click on Min sida', () => {
  cy.get('.myaccount-btn').contains('Min sida').click();
});

Then('I should see all the booked movies', () => {
  cy.wait(1000);
  cy.get('.user-bookings').should('be.visible');
});

Then('I select Avboka', () => {
  cy.get('.cancel-btn').contains('Avboka').click();
});

Then('I confirm the cancellation', () => {
  cy.get('.cancel-confirm-dialog').contains('Är du säker på att du vill avboka');
});

Then('the reservation disapears from the site', () => {
  console.log("The movie disapears from the site")
});

Then('I get an email confirmation I can click on a link and cancel the booking', () => {
  console.log('An email is send to the given email address with the ticket confirmation. There is also a button to cancel the reservation')
});