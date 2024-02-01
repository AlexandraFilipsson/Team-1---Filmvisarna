import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the startpage', () => {
  cy.visit('./');
});

Given('I have clicked on Filmer', () => {
  it('Clicks on the "Filmer" link', () => {
    cy.get('body div header nav ul li:eq(0) a').click();

  });
});

When('I click on På bio nu', () => {
  cy.log('Attempting to click on På bio nu');
  cy.contains('På bio nu').click();
});


When('I apply the filter', () => {



});




Then('I should be able to see all movies that are currently in cinemas', () => {
  // TODO: implement step
});

When('I pick a specific date', () => {
  // TODO: implement step
});

When('I apply the date filter', () => {
  // TODO: implement step
});

Then('I should be able to see all movies scheduled for that date', () => {
  // TODO: implement step
});

When('I select an age limit option', () => {
  // TODO: implement step
});

When('I apply the age limit filter', () => {
  // TODO: implement step
});

Then('I should be able to see all movies that meet the selected age limit', () => {
  // TODO: implement step
});


/*

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the startpage', () => {
  cy.visit('./');
});

Given('I have clicked on Filmer', () => {
  it('Clicks on the "Filmer" link', () => {
    // Visit the page containing the element
    // Use XPath to locate the "Filmer" link and click it
    cy.get('body div header nav ul li:eq(0) a').click();
    cy.wait(10000);
    // Continue with the rest of your test logic or assertions
    // ...
  });
});

Given('I click on På bio nu', () => {
  it('Clicks on the "Filmer" link', () => {
    cy.get('div > main > ul > li:first-child > select > option:first-child').should('be.visible').click();


  });
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
*/