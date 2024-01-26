import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // Goto the start page
  cy.visit('/');
});

When('I click on a movie', () => {
  // TODO: implement step
});

Then('movie details page is presented', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

When('I click on a movie trailer', () => {
  // TODO: implement step
});

Then('movie trailer is presented', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('that I am on the start page', () => {});*/

Given('I click on a movie', () => {
  // TODO: implement step
});

Given('movie details page is presented', () => {
  // TODO: implement step
});

When('I choose a future date in the calender', () => {
  // TODO: implement step
});

Then("I can see the text 'Tyvärr finns det ingen visning för det valda datumet.'", () => {
  // TODO: implement step
});