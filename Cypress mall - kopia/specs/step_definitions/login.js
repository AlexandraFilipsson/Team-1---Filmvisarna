import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the log in page', () => {
  cy.visit("/logga-in")
});

When('I fill the email feald whit wrong@error.example', () => {
  cy.get("div.form-wrapper div:nth-child(1) input").type("wrong@error.example");
});

When('I fill the password feald whit Ananas123456789', () => {
  cy.get("div.form-wrapper div:nth-child(2) input").type("Ananas123456789");
});
When('I click on the Login-button', () => {
  cy.get(".Login-btn").click();
});

Then('I should get an error massage', () => {
  cy.get("p.server-error").should("be.visible");
});

/* No duplicate steps, this one already above
Given('that I am on the log in page', () => {});*/

When('I fill the email feald whit Sakuya.yae@Darkness.ananas', () => {
  cy.get("div.form-wrapper div:nth-child(1) input").type("Sakuya.yae@Darkness.ananas")
});

When('I fill the password feald whit errorERR0RerrorERR0R', () => {
  cy.get("div.form-wrapper div:nth-child(2) input").type("errorERR0RerrorERR0R");
});

/* No duplicate steps, this one already above
When('I click on the Login-button', () => {});*/

/* No duplicate steps, this one already above
Then('I should get an error massage', () => {});*/

/* No duplicate steps, this one already above
Given('that I am on the log in page', () => {});*/

/* No duplicate steps, this one already above
When('I fill the email feald whit Sakuya.yae@Darkness.ananas', () => {});*/

When('I fill the password feald whit nothing in it', () => {
  cy.get("div.form-wrapper div:nth-child(2) input")
});

/* No duplicate steps, this one already above
When('I click on the Login-button', () => {});*/

/* No duplicate steps, this one already above
Then('I should get an error massage', () => {});*/

/* No duplicate steps, this one already above
Given('that I am on the log in page', () => {});*/

/* No duplicate steps, this one already above
When('I fill the email feald whit Sakuya.yae@Darkness.ananas', () => {});*/

/* No duplicate steps, this one already above
When('I fill the password feald whit Ananas123456789', () => {});*/

/* No duplicate steps, this one already above
When('I click on the Login-button', () => {});*/

Then('I should be loged in', () => {
  // TODO: implement step
});

Then('be taken to the register page', () => {
  // TODO: implement step
});

Then('be able to see the {string} button', (myPageBtn) => {
  // TODO: implement step
});