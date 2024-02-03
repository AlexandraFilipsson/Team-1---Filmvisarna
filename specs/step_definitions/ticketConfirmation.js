import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that User on the first page', () => {
  // TODO: implement step
  cy.visit('/')
});

Given('User choose movie that User want to see, 1 ticket, date with time', () => {
  // TODO: implement step
  cy.get(':nth-child(1) > .carousel-wrapper > .carousel > :nth-child(3) > .carousel-img').click()
  
  cy.get('.screening-book-btn').first().click();

  cy.get('.button-container').contains('-').first().click();
  
  cy.get('.seat-row').eq(3).find('.seat').eq(2).click();

  cy.get('div.section-2 > button').click();
});

When('User redirectred to Bekreftlseoversikt page', () => {
  // TODO: implement step
  cy.get('.confirm-button').should('be.visible');
  cy.get('.confirm-button').click();
});

Then('User press log in button and login with correct credentails', () => {
  // TODO: implement step
  cy.get('.login-button').click()

  cy.get('input[type="email"]').type("anna.b@inbox.com")
  cy.get('input[type="password"]').type("annaB123")
  
  cy.get('.Login-btn').click({ force: true });
});

Then('on Berkreftelseoversikt page can see Bekräftelse button', () => {
  // TODO: implement step
  cy.get('.confirm-button').click();
});

Then('pressing to bekräfta can see table with booking information', () => {
  // TODO: implement step
  cy.get('.booking-confirmation-container').contains('Du har bokat:')

  cy.get('strong').contains('Titel')
  cy.get('p').contains('Prison 77')

  cy.get('strong').contains('Tid')
  //cy.get('p').contains('18:00')

  cy.get('strong').contains('Datum')
  //cy.get('p').contains('Torsdag 1 feb')

  
  
  cy.get('strong').contains('Bokningsnummer').then(() => {
    cy.get('p').invoke('text').then((text) => {
      const bookingNumber = text.match(/[a-zA-Z0-9]{6}/); // Extract booking number
      expect(bookingNumber).to.have.lengthOf(1); // Check if a booking number is found
    });
  });
  
  cy.get('.close-btn').click();

  //as en additional step User go to the Min sida and delate booking, othervise every time
  //before to run this autotest should be changed seats
  cy.get('.myaccount-btn').contains('Min sida').click()
  cy.get('.cancel-btn').contains('Avboka').click()
  cy.get('.cancel-dialog-btns> .cancel-btn').contains('Avboka').click()
 
  cy.get('.my-account-logout-btn').contains('Logga ut').click()
});

Then('add valid e-mail in field email', () => {
  // TODO: implement step
  cy.get('input[type="email"]').type("anna.b@inbox.com")
});

Then('pressing to Bekräfta button can see table with booking information', () => {
  // TODO: implement step
  cy.get('.confirm-button').contains('Bekräfta').click()
  
  // TODO: implement step
  cy.get('.booking-confirmation-container').contains('Du har bokat:')

  cy.get('strong').contains('Titel')
  cy.get('p').contains('Prison 77')

  cy.get('strong').contains('Tid')
  //cy.get('p').contains('18:00')

  cy.get('strong').contains('Datum')
  //cy.get('p').contains('Torsdag 1 feb')

  cy.get('.close-btn').click();
});