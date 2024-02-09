import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the {string}-page', () => {
  cy.visit('/bokning/145');
});

When('I add {string} of {string}', (ticketAmount, ticketType) => {
  for (let i = 0; i < 2; i++) {
    cy.get('.ticket-list-item .button-container')
      .first()
      .find('button')
      .first()
      .click()
  }
  
  ticketAmount = +ticketAmount;
  cy.wrap(ticketAmount).as('ticketAmount');
  ticketType = +ticketType;  
  let addTicketButton;
  let priceP;

  if (ticketType === 0) {    
    for (let i = 0; i < ticketAmount; i++) {
      addTicketButton = cy.get('.ticket-list-item .button-container').eq(0).find('button').last().click();
    }
    priceP = cy.get('.ticket-list-item p').contains(140);
  }

  else if (ticketType === 1) {    
    for (let i = 0; i < ticketAmount; i++) {
      addTicketButton = cy.get('.ticket-list-item .button-container').eq(1).find('button').last().click();      
    }
    priceP = cy.get('.ticket-list-item p').contains(120);
  }
    
  else if (ticketType === 2) {    
    for (let i = 0; i < ticketAmount; i++) {
      addTicketButton = cy.get('.ticket-list-item .button-container').eq(2).find('button').last().click();
    }
    priceP = cy.get('.ticket-list-item p').contains(80);
  }

  cy.log(addTicketButton);
  priceP.then($element => {
    let textOfPriceSpan = $element.text();
    let price = +textOfPriceSpan.replace(/\D/g, '');
    cy.wrap(price).as('pricePerAmount');    
  });
});

Then('I want to see the correct sum in {string}', function () {
  cy.get('.total-cost-container').then($element => {
    let textOfTotalTickets = $element.text();
    let total = +textOfTotalTickets.replace(/\D/g, '');
    let expectedTotal = this.pricePerAmount * this.ticketAmount;
    expect(total).to.equal(expectedTotal);
  });
});