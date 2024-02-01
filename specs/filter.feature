Feature: Filter
  As a user I want to be able to filter between all the movies based on different criteria.

  Background:
    Given that I am on the startpage
    And I have clicked on Filmer

  Scenario: Filter movies if they are in the cinema right now
    When I click on På bio nu
    And I apply the filter
    Then I should be able to see all movies that are currently in cinemas

  Scenario: Filter movies by specific date
    When I pick a specific date
    And I apply the date filter
    Then I should be able to see all movies scheduled for that date

  Scenario: Filter movies by age limit
    When I select an age limit option
    And I apply the age limit filter
    Then I should be able to see all movies that meet the selected age limit

