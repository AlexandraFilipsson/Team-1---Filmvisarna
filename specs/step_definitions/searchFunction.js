import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That you are on the startpage', () => {
  cy.visit('/');
});

Given('Click on searchfield', () => {  
  cy.get('button.search-btn').click();
});

When('I type something in the searchfield', () => {  
  cy.get('input.search-input.search-input-mobile').type('komedi');
});

When('press Enter', () => {  
  cy.get('input.search-input.search-input-mobile').type('{enter}');
});

Then('I want to see results based on searchinput', () => {  
  cy.get('article.search-result-card').contains('komedi').should('be.visible');
});

When('I type something in the searchfield that gives negative result', () => {
  cy.get('input.search-input.search-input-mobile').type('1337');
});

Then('I want to see an infotext', () => {
  cy.get('article.search-result-container p').contains('Vi hittade inget som matchade din sökning!').should('be.visible');
});