Feature: Cancel Booking
  As a user I want to be able to cancel my booked tickets.

  Scenario: Cancel booked tickets
    Given that I have logged into "Min Sida"
    And I have booked tickets to a movie
    When I click on "Avboka" button
    Then a cancel confirm dialog should be presented
    And after confirmation ticket is cancelled
