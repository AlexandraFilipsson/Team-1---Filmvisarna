import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that User on the first page', () => {
  // TODO: implement step
  cy.visit('/')
});

Given('User choose movie that User want to see, date with time and amount of tickets', () => {
  // TODO: implement step
  cy.get(':nth-child(1) > .carousel-wrapper > .carousel > :nth-child(6) > .carousel-img').click()
  
  cy.get('.screening-book-btn').first().click();

  cy.get('.button-container').contains('-').first().click();

});

Then('User choose seat', () => {
  // TODO: implement step
  cy.get('.seat-row').eq(3).find('.seat').eq(8).click();
});

Then('user should be abble to prees button button Boka biljet', () => {
  // TODO: implement step
  cy.get('div.section-2 > button').click();
});

Then('be redirected to booking confirmation page', () => {
  // TODO: implement step
  cy.get('h1').contains('Bokningsöversikt')
});


//Scenario nr2
Then('forgot to press to seats', () => {
  // TODO: implement step
  //cy.get('section-2').should('be.empty');
  
  const forbiddenData = 'Vald plats';

    // Check that the container does not contain the forbidden information
    cy.get('.section-2').should('not.contain', forbiddenData);
});

Then('button boka biljet should be disabled', () => {
  // TODO: implement step
  cy.get('div.section-2 > button').should('be.disabled');
});