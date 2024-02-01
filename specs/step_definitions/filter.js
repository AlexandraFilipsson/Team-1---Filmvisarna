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
  When('I apply the filter', () => {
    cy.log('Attempting to apply the filter');
  })
});


Then('I should be able to see all movies that are currently in cinemas', () => {
  Then('I should be able to see all movies that are currently in cinemas', () => {
    // Wait for the movies to be loaded
    cy.get('.cinema-movies').should('exist').should('be.visible');
  });

});


When('I pick a specific date', () => {
  When('I pick a specific date', () => {
    // Assuming the input field for the date has a unique identifier or class
    cy.get('body div main ul li:nth-child(2) input').type('2024-02-14'); // Assuming '2024-02-01' is the desired date format
  });

});

When('I apply the date filter', () => {
  When('I apply the date filter', () => {
    cy.get('.sectionClass').should('exist');
  })
});


Then('I should be able to see all movies scheduled for that date', () => {
  Then('I should be able to see all movies scheduled for that date', () => {
    cy.get('body > div > main > section').should('be.visible');
  });
});

When('I select an age limit option', () => {
  When('I select an age limit option', () => {
    cy.get('body > div > main > ul > li:eq(2) > select').select('YourAgeLimitOption');
  });
});

When('I apply the age limit filter', () => {
  When('I apply the age limit filter', () => {
    cy.get('body > div > main > section').should('exist');
  });
});

Then('I should be able to see all movies that meet the selected age limit', () => {
  Then('I should be able to see all movies that meet the selected age limit', () => {
    cy.get('body > div > main > section').should('exist');
  });
});