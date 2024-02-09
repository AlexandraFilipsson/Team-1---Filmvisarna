import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the startpage', () => {
  cy.visit('/');
});

Given('I have clicked on Filmer', () => {
  cy.viewport(1200, 900)
  cy.wait(1000);
  cy.get('header nav a[href="/filmer"]').click();
});

When('I click on På bio nu', () => {
  cy.log('Attempting to click on På bio nu');
  cy.get('select[name="upcoming"]').select("false");
  cy.wait(1000);
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
  cy.get('.filter-date-input')
    .type('2024-02-24')
    .wait(1000)
});

//When('I apply the date filter', () => {
// cy.get('.sectionClass', { timeout: 10000 })
//   .should('exist')
// })


Then('I should be able to see all movies scheduled for that date', () => {
  cy.get('body > div > main > section').should('be.visible');
});


When('I select an age limit option', () => {
  cy.get('select[name="age"].filter-select').select('0');
  cy.wait(1000);


});

Then('I should be able to see all movies that meet the selected age limit of "Barntillåtet"', () => {
  cy.get('.movie-card').each(($card) => {
    cy.wrap($card).find('span.card-agelimit').should('have.text', 'Barn');
  }).then(() => {
    cy.log('All movie cards have the age limit of Barntillåtet.');
  });

});

Then('I should be able to see all movies that meet the selected age limit of 7', () => {
  cy.get('select[name="age"].filter-select').select('7');
  cy.wait(1000);
  cy.get('.movie-card').each(($card) => {
    cy.wrap($card).find('span.card-agelimit').should('have.text', '7 +');
  }).then(() => {
    cy.log('All movie cards have the age limit of 7');
  });

});

Then('I should be able to see all movies that meet the selected age limit of 11', () => {
  cy.get('select[name="age"].filter-select').select('11');
  cy.wait(1000);
  cy.get('.movie-card').each(($card) => {
    cy.wrap($card).find('span.card-agelimit').should('have.text', '11 +');
  }).then(() => {
    cy.log('All movie cards have the age limit of 11.');
  });

});


Then('I should be able to see all movies that meet the selected age limit of 15', () => {
  cy.get('select[name="age"].filter-select').select('15');
  cy.wait(1000);
  cy.get('.movie-card').each(($card) => {
    cy.wrap($card).find('span.card-agelimit').should('have.text', '15 +');
  }).then(() => {
    cy.log('All movie cards have the age limit of 15.');
  });

});
