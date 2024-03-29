import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have clicked on the first movie', () => {
 
  cy.get('.carousel-wrapper')
    .should('have.length', 2)
    .find('.carousel-card')
    .first()
    /*Here I had a .wait(1000) but changed by adding the step after, when I had alredy 
   sent in my individual report where I mention I use.wait()*/
    .click()
});

//__________1__________
Given('I have chosen the date 2024-02-22', () => {
  cy.get('.date-input')
    .type('2024-02-22')
    /*Here I had a .wait(1000) but changed adding the step after, when I had alredy 
    sent in my individual report where I mention I use.wait()*/
});

Given('the site should show 1 screening', () => {
  cy.get('.screenings-list')
    .find('section .screening-details')
    .should('have.length', 1)
})

Given('I have pressed Boka', () => { 
   cy.get('.screening-book-btn')
    .first()
    .click();
})

Given('theatre-container is visible', () => {
  cy.get('.theatre-seats')
    .should('be.visible');
});

Given('all seats are taken', () => {
  cy.get('.seat:not(.taken-seat)')
    .should('have.length', 0)
});

Then('The Boka biljett button should be disabled', () => {
   cy.get('.section-2')
    .find('button')
    .should('be.disabled')
});

//__________2__________
Given('I have chosen the date 2024-02-17', () => {
  cy.get('.date-input')
    .type('2024-02-17')
    /*Here I had a .wait(1000) but changed by addind the step after, when I had alredy 
    sent in my individual report where I mention I use.wait()*/
   
});

When('I add 6 tickets', () => {
  for (let i = 0; i < 6; i++) {
    cy.get('.ticket-list-item .button-container')
      .last()
      .find('button')
      .last()
      .click()
  }
});

When('there are only 5 seats available', () => {
  cy.get('.seat:not(.taken-seat)')
    .should('have.length', 5)
});
When('I should not be able to press seats that are taken', () => { 
  cy.get('.taken-seat')
    .first()
    .first()
    .trigger('mouseover')
})
Then('the taken seats should turn red', () => {
  cy.get('.taken-seat')
    .should('have.class', 'seat-hover-fail')
})
 
//__________3__________

Given('I have pressed the button to choose a date and time', () => {
  cy.get('.screening-book-btn')
    .first()
    .click();
});

When('I want to buy 10 tickets', () => {
  for (let i = 0; i < 10; i++){
    cy.get('.ticket-list-item .button-container')
      .last()
      .find('button')
      .last()
      .click()
  }
});

Then('a message should tell me that i can not book more then 8 tickets at a time', () => {
  cy.get('.ticketlimit-notis')
    .should('be.visible')
});

//__________4__________

When('I enter 1 ordinary ticket for the movie', () => {
  cy.get('.ticket-list-item .button-container')
    .last()
    .find('button')
    .last()
    .click()
});
When('I try pressing seats that are taken', () => { 
    cy.get('.taken-seat')
    .first()
    .trigger('mouseover')
    .click()
})
Then('the seat should turn red', () => {
  cy.get('.taken-seat')
    .first()
    .should('have.class', 'seat-hover-fail')  
})

//__________5__________

Given('I have chosen the date 2024-02-18', () => {
  cy.get('.date-input')
    .type('2024-02-18')
    /*Here I had a .wait(1000) but changed by adding the step after, when I had alredy 
    sent in my individual report where I mention I use.wait()*/
});

When('I press individuella platser', () => {
  cy.get('.custom-checkbox')
  .click()
})

When('I can press the first and the last seats', () => { 
  cy.get('.seat')
    .first()
    .click()
  cy.get('.seat')
    .last()
    .click()
})

When('press Boka biljett', () => {
  cy.get('.section-2')
    .find('button')
    .click()
})
Then('Bookconfirm-wrapper should show', () => { 
  cy.get('.bookconfirm-wrapper')
    .should('be.visible')
})
