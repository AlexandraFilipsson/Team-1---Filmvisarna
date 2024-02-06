Feature: Cancel booking as a member
  As a user, I want to be able to cancel a booking

  Background:
    Given that I am on the start page
    And I logg in as a member
    And that I have a movie ticket booked

  Scenario: Member Cancelling Booking
    When I select the booking I wish to cancel
    And I click on the "Cancel" option
    Then I should see a confirmation dialogue
    And I proceed by confirming the cancellation request
    Then the booking cancellation should be confirmed successfully
    And I will receive a confirmation email