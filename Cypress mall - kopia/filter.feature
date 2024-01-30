Feature: Filter between all the movies
  As a user I want to be able to filter between different movies based on various critera, so that I can find movies that match my preferences.

  Scenario: Filtering movies that are running on cinema now
    Given that I am on the side "Filmer"
    When I have clicked on "På bio nu"
    Then I should be able to see all the movies that right now-
  are on cinema


  Scenario: Filtering movies that are about to come to the cinema
    Given that I am on the side "Filmer"
    When I have clicked on "Kommande"
    Then I should be able to see all the movies that about to come to the cimena



