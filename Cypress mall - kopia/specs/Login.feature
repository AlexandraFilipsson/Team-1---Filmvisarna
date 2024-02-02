
Feature: log in to the website
  As a user I want to be able to log in to my account so that i can se my bookings an my booking history

  Scenario: Login whit the wrong email
    Given that I am on the log in page
    When I fill the email feald whit wrong@error.example
    And I fill the password feald whit Ananas123456789
    And I click on the Login-button
    Then I should get an error massage

  Scenario: Login whit the wrong password
    Given that I am on the log in page
    When I fill the email feald whit Sakuya.yae@Darkness.ananas
    And I fill the password feald whit errorERR0RerrorERR0R
    And I click on the Login-button
    Then I should get an error massage

  Scenario: Login whit a empty password feald
    Given that I am on the log in page
    When I fill the email feald whit Sakuya.yae@Darkness.ananas
    And I fill the password feald whit nothing in it
    And I click on the Login-button
    Then I should get a required feald error

  Scenario: Login whit a correct credentials
    Given that I am on the log in page
    When I fill the email feald whit Sakuya.yae@Darkness.ananas
    And I fill the password feald whit Ananas123456789
    And I click on the Login-button
    Then I should be loged in
    And be taken to the register page
    And be able to see the "Min sida" button
