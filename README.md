# Team-1---Filmvisarna
Grupparbete 
Medlemmar:
Alexandra, Kira, Charlotte, Kim, Samuel, Annelie


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that User on the first page', () => {
  // TODO: implement step git
  cy.visit('/')
});

Given('User choose movie that User want to see, 1 ticket, date with time', () => {
  // TODO: implement step 
  
  cy.get(':nth-child(1) > .carousel-wrapper > .carousel > :nth-child(6) > .carousel-img').click()
  
  cy.get('.screening-book-btn').first().click();

  cy.get('.button-container').contains('-').first().click();

  
  cy.get('.seat-row').eq(3).find('.seat').eq(8).click();

});

When('User got throug all booking stepps', () => {
  // TODO: implement step
  cy.get('.bookingpage-movie-title').contains('Lejonkungen')

  cy.get('.section-2').contains('Vald plats: rad 4')

});

Then('user should be abble to prees button button Boka biljet', () => {
  // TODO: implement step
  cy.get('div.section-2 > button').click();
});


Then('be redirected to booking confirmation page', () => {
  // TODO: implement step

});

//Scenario rn2

Then('button boka biljet should be disapbled', () => {
  // TODO: implement step
});


cy.get('.bookingpage-movie-title').contains('Lejonkungen')

  cy.get('.section-2').contains('Vald plats: rad 4')
