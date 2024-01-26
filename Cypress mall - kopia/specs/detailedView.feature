Feature: Detailed View
    As a user I want to reach the detailed view for a specific movie,
    to be able to see more information about the movie (picture, information text, actors, director etc.)

    Scenario: See movie details page (background picture, info text, date and booking)
        Given that I am on the start page
        When I click on a movie
        Then movie details page is presented

    Scenario: See movie trailer
        Given that I am on the start page
        When I click on a movie trailer
        Then movie trailer is presented

    Scenario: Not able to see any booking info for upcoming movies on movie details page
        Given that I am on the start page
        And I click on a movie
        And movie details page is presented
        When I choose a future date in the calender
        Then I can see the text 'Tyvärr finns det ingen visning för det valda datumet.'

