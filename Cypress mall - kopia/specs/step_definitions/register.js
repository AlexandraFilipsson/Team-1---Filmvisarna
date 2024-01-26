import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the register new user page', () => {
  cy.visit("/registrera");
});

When('I fill the firstname feald whit {string}', (firstname) => {
  cy.get(".register-form input").type(firstname);
});

When('I fill the lastname feald whit {string}', (lastname) => {
  cy.get(".register-form input").type(lastname);
});

When('I fill the phonenumber feald whit {string}', (a) => {
  // TODO: implement step
});

When('I fill the email feald whit {string}', (a) => {
  // TODO: implement step
});

When('I fill the password feald whit {string}', (a) => {
  // TODO: implement step
});

When('I fill the confirm password feald whit {string}', (a) => {
  // TODO: implement step
});

When('I click on the confirm-button', () => {
  // TODO: implement step
});

Then('I should be able to click on the ”Min sida”', () => {
  // TODO: implement step
});

Then('be taken to ”Min sida” page', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('that I am on the register new user page', () => {});*/

/* No duplicate steps, this one already above
When('I fill the firstname feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the lastname feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the phonenumber feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the email feald whit {string}', (a) => {});*/

When('I fill the password feald whit ABC12345', () => {
  // TODO: implement step
});

When('I fill the confirm password feald whit ABC12345', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I click on the confirm-button', () => {});*/

Then('I should get a error message', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('that I am on the register new user page', () => {});*/

/* No duplicate steps, this one already above
When('I fill the lastname feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the phonenumber feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the email feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the password feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I fill the confirm password feald whit {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I click on the confirm-button', () => {});*/

Then('I should get a pop-up saying that I need to fill in firstname', () => {
  // TODO: implement step
});