Feature: Filter
  As a user I want to be able to filter between all the movies such

  Background:
    Given that I am on the startpage
    And I have clicked on Filmer

  Scenario: Filter movies if they are in the cinema right now
    Given I click on På bio nu
    When I apply the filter
    Then I should be able to see all movies that are currently in cinemas

  Scenario: Filter movies by specific date
    Given I pick a specific date
    When I apply the date filter
    Then I should be able to see all movies scheduled for that date

  Scenario: Filter movies by age limit
    Given I select an age limit option
    When I apply the age limit filter
    Then I should be able to see all movies that meet the selected age limit

