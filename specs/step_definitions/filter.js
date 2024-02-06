import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the startpage', () => {
  cy.visit('./');
  cy.viewport(1200, 900)
});

Given('I have clicked on Filmer', () => {
  cy.get('header nav a[href="/filmer"]').click();
});

When('I click on På bio nu', () => {
  cy.log('Attempting to click on På bio nu');
  cy.get('select[name="upcoming"]').select("false");
});


When('I apply the filter', () => {
  cy.log('Attempting to apply the filter');
})


Then('I should be able to see all movies that are currently in cinemas', () => {
  cy.get('.movie-card').then($movies => {
    cy.get('.movie-card').should('have.length.gt', 3);
    cy.contains('På bio nu').should('exist');
  });
});



When('I pick a specific date', () => {

  cy.get('body div main ul li:nth-child(2) input').type('2024-02-14'); // 
});

When('I apply the date filter', () => {
  cy.get('.sectionClass').should('exist');
})


Then('I should be able to see all movies scheduled for that date', () => {
  cy.get('body > div > main > section').should('be.visible');
});


When('I select an age limit option', () => {
  cy.get('body > div > main > ul > li:eq(2) > select').select('YourAgeLimitOption');
});


When('I apply the age limit filter', () => {
  cy.get('body > div > main > ul > li:eq(2) > select').select('YourAgeLimitOption');
});


Then('I should be able to see all movies that meet the selected age limit', () => {
  cy.get('body > div > main > section').should('exist');
});
