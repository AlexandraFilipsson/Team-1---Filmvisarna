import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the register new user page', () => {
  cy.visit("/registrera");
});

When('I fill the firstname feald whit {string}', (firstname) => {
  cy.get(".register-form input:first-child").type(firstname);
});

When('I fill the lastname feald whit {string}', (lastname) => {
  cy.get(".register-form input:nth-child(2)").type(lastname);
});

When('I fill the phonenumber feald whit {string}', (phonenumber) => {
  cy.get(".register-form input:nth-child(3)").type(phonenumber);
});

When('I fill the email feald whit {string}', (email) => {
  cy.get(".register-form input:nth-child(4)").type(email);
});

When('I fill the password feald whit {string}', (password) => {
  cy.get(".register-form input:nth-child(5)").type(password);
});

When('I fill the confirm password feald whit {string}', (password) => {
  cy.get(".register-form input:nth-child(6)").type(password);
});

When('I click on the confirm-button', () => {
  cy.get(".confirm-button");
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
  cy.get(".register-form input:nth-child(5)").type("ABC12345");
});

When('I fill the confirm password feald whit ABC12345', () => {
  cy.get(".register-form input:nth-child(6)").type("ABC12345");
});

/* No duplicate steps, this one already above
When('I click on the confirm-button', () => {});*/

Then('I should get a error message', () => {
  cy.get(".error-message").should("be.visible");
});

/* No duplicate steps, this one already above
Given('that I am on the register new user page', () => {});*/

When("I don't fill the firstname feald", () => {
  cy.get(".register-form input:first-child");
});

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