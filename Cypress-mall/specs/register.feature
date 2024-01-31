Feature: register new user
  As a user I want to register an acount so that I can log in

  Scenario: Register new user
    Given that I am on the register new user page
    When I fill the firstname feald whit "Sakuya"
    And I fill the lastname feald whit "Yae"
    And I fill the phonenumber feald whit "000000000"
    And I fill the email feald whit "testing@example.example"
    And I fill the password feald whit "GUITesting75880"
    And I fill the confirm password feald whit "GUITesting75880"
    And I click on the confirm-button
    Then I should be able to click on the ”Min sida”
    And be taken to ”Min sida” page

  Scenario: Register new user whit invalid password
    Given that I am on the register new user page
    When I fill the firstname feald whit "firstname"
    And I fill the lastname feald whit "lastname"
    And I fill the phonenumber feald whit "phonenumber"
    And I fill the email feald whit "email"
    And I fill the password feald whit ABC12345
    And I fill the confirm password feald whit ABC12345
    And I click on the confirm-button
    Then I should get a error message

  Scenario: Register new user whitout username
    Given that I am on the register new user page
    When I fill the lastname feald whit "lastname"
    And I fill the phonenumber feald whit "phonenumber"
    And I fill the email feald whit "email"
    And I fill the password feald whit "password"
    And I fill the confirm password feald whit "password"
    And I click on the confirm-button
    Then I should get a pop-up saying that I need to fill in firstname
