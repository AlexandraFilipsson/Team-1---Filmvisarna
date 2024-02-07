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
  //cy.get('body > div > main > section > article:nth-child(6)').then(($article) => {

});
//});

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
  //cy.wait(2000)
  cy.get('.confirm-button').contains('Bekräfta');

});


When('I click on Min sida', () => {
  cy.get('.myaccount-btn').contains('Min sida');
});

Then('I should see all the booked movies', () => {

});

Then('I select Avboka', () => {
  // TODO: implement step
});

Then('I confirm the cancellation', () => {
  // TODO: implement step
});

Then('the reservation disapears from the site', () => {
  // TODO: implement step
});