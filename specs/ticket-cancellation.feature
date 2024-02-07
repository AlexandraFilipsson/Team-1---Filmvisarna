Feature: Ticket Cancellation both as member and non-member
  As a user I want cancel a booked ticket as a member

  Background:
    Given that I am on the start page

  Scenario: Member Cancelling Ticket
    When I logg in as a member
    And I navigate to a movie booking
    And I confirm my seat selection
    And I confirm the booking
    Then I receive a confirmation

    When I click on Min sida
    Then I should see all the booked movies
    And I select Avboka
    And I confirm the cancellation
    Then the reservation disapears from the site

