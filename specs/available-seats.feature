Feature: Available Seats

    As a user I want to be able to overlook available seats in the cinema saloon at a specific showing so I can 
      decide if the seats are interesting for me.
    I also want to be able to book seats at the showing so I know that I have the seats I want when I watch the movie.
    As a user I don't want to be able to book already taken seats and I want the site to show if a seat is taken.
    As a user I want to see Live or directly at the screen when seats ar booked so I don't think they are still available.

    Background:
      Given I am on the startpage
      And I have clicked on the first movie
       
    Scenario: all seats are taken
      Given I have chosen the date 2024-02-22
      And I have pressed Boka
      And theatre-container is visible
      And all seats are taken
      Then I should not be able to continue 

    Scenario: If there is not enough seats for the group I want to book tickets for.
      Given I have chosen the date 2024-02-17
      And I have pressed Boka
      And theatre-container is visible
      When I add 6 tickets
      And there are only 5 seats available
      Then I should not be able to press seats that are taken.
      
    Scenario: I want to book more then 8 ticket
      Given I have pressed the button to choose a date and time
      And theatre-container is visible
      When I want to buy 10 tickets
      Then a message should tell me that i can not book more then 8 tickets at a time
      And I should not be able to press Boka biljett

    Scenario: I want to book a specific seat thats taken
      Given I have pressed the button to choose a date and time
      And theatre-container is visible
      When I enter 1 ordinary ticket for the movie 
      Then I should not be able to press seats that are taken.
      
    Scenario: I want to book seats that are not adjacent
      Given I have chosen the date 2024-02-18 
      And I have pressed Boka
      And theatre-container is visible
      When I press individuella platser
      Then I can press the first and the last seats 
      And press Boka biljett