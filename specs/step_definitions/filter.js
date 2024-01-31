import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the startpage', () => {
  cy.visit('/')
});

Given('I have clicked on Filmer', () => {

});

Given('I click on På bio nu', () => {
  // TODO: implement step
});

When('I apply the filter', () => {
  // TODO: implement step
});

Then('I should be able to see all movies that are currently in cinemas', () => {
  // TODO: implement step
});

Given('I pick a specific date', () => {
  // TODO: implement step
});

When('I apply the date filter', () => {
  // TODO: implement step
});

Then('I should be able to see all movies scheduled for that date', () => {
  // TODO: implement step
});

Given('I select an age limit option', () => {
  // TODO: implement step
});

When('I apply the age limit filter', () => {
  // TODO: implement step
});

Then('I should be able to see all movies that meet the selected age limit', () => {
  // TODO: implement step
});