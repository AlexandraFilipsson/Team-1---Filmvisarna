import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  cy.visit('/');
});

When('I click on the last movie', () => {
  cy.get('.carousel-card').last().click();
});

Then('movie details page is presented', () => {
  cy.get('.moviedetail-wrapper')
  .should('be.visible')
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {
}); */

Then('movie trailer should be visible', () => {
  cy.get('.trailer-iframe')
    .should('be.visible');
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {});*/

Then('moviedetail-director field should be found', () => {
  cy.get('.moviedetail-director') 
    .should('be.visible');
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {});*/

When('I click on {string} button', (a) => {
  cy.get('.screening-book-btn').wait(1000).click();
});

Then('I should be taken to page ”Bokning”', () => {
  cy.visit("https://filmvisarna-team1.nodehill.se/bokning/119");

});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {});*/

When('I choose a future date in the calender', () => {
  cy.get('.date-input').type('2024-03-30')
});

Then("I can see the text 'Tyvärr finns det ingen visning för det valda datumet.'", () => {
  cy.get('.no-screening-para')
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

When('I click on the first movie', () => { 
cy.get('.carousel-card').first().click();
});

/* No duplicate steps, this one already above
When('movie details page is presented', () => {
});*/

When('I press the {string} button', (a) => {
  cy.get('.more-screenings-btn').wait(1000).click();
});

Then('more viewings to book should be presented on the page', () => {
 cy.get('.screening-details')
    .should('have.length', 6)
});