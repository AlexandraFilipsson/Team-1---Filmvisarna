Feature: Filter
  As a user I want to be able to filter between all the movies such

  Scenario: Filter movies by genre
    Given that I am on the folder "Filmer"
    When I select a specific genre from the filter options
    Then only movies belonging to that genre should be displayed


