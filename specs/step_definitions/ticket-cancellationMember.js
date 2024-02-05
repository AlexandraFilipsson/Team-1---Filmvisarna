import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the booked movie page', () => {
  cy.request('https://filmvisarna-team1.nodehill.se/mitt-konto')
    .then((response) => {
      // Handle response
      // You can assert on response status, body, headers, etc.
      expect(response.status).to.eq(200);
      // Add your further assertions or actions here
    });

});

When('I select the booking I wish to cancel', () => {
  cy.wait(5000); // Wait for 5 seconds
  cy.get('#root > main > div > div.my-account-content > section.user-bookings > ul > li > div.booking-btns > button.show-tickets-btn');

});

When('I click on the {string} option', (a) => {
  cy.get('#root > main > div > div.my-account-content > section.user-bookings > ul > li > div.booking-btns > button.cancel-btn');


});

Then('I should see a confirmation dialogue', () => {
  // TODO: implement step
});

Then('I proceed by confirming the cancellation request', () => {
  // TODO: implement step
});

Then('the booking cancellation should be confirmed successfully', () => {
  // TODO: implement step
});

Then('I will receive a confirmation email', () => {
  // TODO: implement step
});

