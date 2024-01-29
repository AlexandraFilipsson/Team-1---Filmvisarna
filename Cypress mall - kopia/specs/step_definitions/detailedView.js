import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // Goto the start page
  cy.visit('/');
});

When('I click on a movie', () => {
  cy.get('.carousel-card').last().click();
  // TODO: implement step
});

Then('movie details page is presented', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {
}); */

Then('movie trailer should be visible', () => {
  cy.get('.ytp-cued-thumbnail-overlay')
    .should('be.visible');
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

/* No duplicate steps, this one already above
Given('I click on a movie', () => {});*/

/* No duplicate steps, this one already above
Given('movie details page is presented', () => {});*/

When('I choose a future date in the calender', () => {
  // TODO: implement step
});

Then("I can see the text 'Tyvärr finns det ingen visning för det valda datumet.'", () => {
  // TODO: implement step
});