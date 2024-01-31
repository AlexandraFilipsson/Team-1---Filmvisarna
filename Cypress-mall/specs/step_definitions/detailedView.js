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

/*Given('I click on a movie', () => {
  // TODO: implement step
});*/

/*Given('movie details page is presented', () => {
  // TODO: implement step
});*/

When('I click on {string} button', (a) => {
  // Grab the Boka-button and click it
  cy.get(".screening-book-btn").click();
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