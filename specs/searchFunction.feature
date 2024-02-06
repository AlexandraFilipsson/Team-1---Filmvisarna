Feature: Searchfunction

    I want to be able to search for movies, genres, directors actors etc. And be given results according to search input

    Scenario: Search for relevant movieinfo and get results based on searchinput
        Given That you are on the startpage
        And Click on searchfield
        When I type something in the searchfield
        And press Enter
        Then I want to see results based on searchinput    

    Scenario: Search for something that gives intentional negative result
        Given That you are on the startpage
        And Click on searchfield
        When I type something in the searchfield that gives negative result
        And press Enter
        Then I want to see an infotext