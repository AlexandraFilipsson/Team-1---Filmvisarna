import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that User on the first page', () => {

  cy.visit('/')
});

Given('User choose movie that User want to see, date with time and amount of tickets', () => {
  
  cy.get(':nth-child(1) > .carousel-wrapper > .carousel > :nth-child(6) > .carousel-img').click()
  
  cy.get('.screening-book-btn').first().click();

  cy.get('.button-container').contains('-').first().click();

});

Then('User choose seat', () => {
  
  cy.get('.seat-row').eq(3).find('.seat').eq(8).click();
});

Then('user should be abble to prees button button Boka biljet', () => {

  cy.get('div.section-2 > button').click();
});

Then('be redirected to booking confirmation page', () => {
  
  cy.get('h1').contains('Bokningsöversikt')
});


//Scenario nr2
Then('forgot to press to seats', () => {
  
  const forbiddenData = 'Vald plats';
    cy.get('.section-2').should('not.contain', forbiddenData);
});

Then('button boka biljet should be disabled', () => {
  
  cy.get('div.section-2 > button').should('be.disabled');
});