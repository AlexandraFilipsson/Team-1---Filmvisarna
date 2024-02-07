import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that User on the first page', () => {
  
  cy.visit('/')
});

Given('User choose movie that User want to see, 1 ticket, date with time', () => {
  
  cy.get(':nth-child(1) > .carousel-wrapper > .carousel > :nth-child(3) > .carousel-img').click()
  
  cy.get('.screening-book-btn').first().click();

  cy.get('.button-container').contains('-').first().click();
  
  cy.get('.seat-row').eq(4).find('.seat').eq(9).click();

  cy.get('div.section-2 > button').click();
});

When('User redirectred to Bekreftlseoversikt page', () => {
 
  cy.get('.confirm-button').should('be.visible');

  // just click, nothing should heppen till needed actions will be performed
  cy.get('.confirm-button').click();
});

Then('User press log in button and login with correct credentails', () => {
  
  cy.get('.login-button').click()

  cy.get('input[type="email"]').type("anna.b@inbox.com")
  cy.get('input[type="password"]').type("annaB123")
  
  cy.get('.Login-btn').click({ force: true });
});

Then('on Berkreftelseoversikt page can see Bekräftelse button', () => {
 
  cy.get('.confirm-button').click();
});

Then('pressing to bekräfta can see table with booking information', () => {
  
  cy.get('.booking-confirmation-container').contains('Du har bokat:')

  cy.get('strong').contains('Titel')
  cy.get('p').contains('Prison 77')
  cy.get('strong').contains('Tid')
  cy.get('strong').contains('Datum')

  
  cy.get('strong').contains('Bokningsnummer').then(() => {
    cy.get('p').invoke('text').then((text) => {
      const bookingNumber = text.match(/[a-zA-Z0-9]{6}/); // Extract booking number
      expect(bookingNumber).to.have.lengthOf(1); // Check if a booking number is found
    });
  });
  
  cy.get('.close-btn').click();

  //as en additional step User go to the Min sida and delete booking, othervise every time
  //before to run this autotest should be changed seats
  cy.get('.myaccount-btn').contains('Min sida').click()
  cy.get('.cancel-btn').contains('Avboka').click()
  cy.get('.cancel-dialog-btns> .cancel-btn').contains('Avboka').click()
 
  cy.get('.my-account-logout-btn').contains('Logga ut').click()
});


//Scenario Nr2, confirmation without log in as a member.
//There is not possible to delete booking when User is not inlogged or there will be needed every time to change seats for booking

/*Then('add valid e-mail in field email', () => {
  
  cy.get('input[type="email"]').type("anna.b@inbox.com")
});

Then('pressing to Bekräfta button can see table with booking information', () => {
  
  cy.get('.confirm-button').contains('Bekräfta').click()
  
  cy.get('.booking-confirmation-container').contains('Du har bokat:')
  cy.get('strong').contains('Titel')
  cy.get('p').contains('Prison 77')
  cy.get('strong').contains('Tid')
  cy.get('strong').contains('Datum')

  cy.get('.close-btn').click();
});*/