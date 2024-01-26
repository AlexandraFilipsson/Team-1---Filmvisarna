Feature: Available Seats

    As a user I want to be able to overlook available seats in the cinema saloon at a specific showing so I can 
      decide if the seats are interesting for me.
    I also want to be able to book seats at the showing so I know that I have the seats I want when I watch the movie.
    As a user I don't want to be able to book already taken seats and I want the site to show if a seat is taken.
    As a user I want to see Live or directly at the screen when seats ar booked so I don't think they are still available.

    Background:
      Given I have clicked on a movie
      And I have pressed the button to choose a date and time  
      And "bookingpage-container" is visable
       
    Scenario: If all seats are taken
      When all seats are taken
      Then I should not be able to continue 
      And an alert should tell me so
          
    Scenario: If there is not enough seats for the group I want to book tickets for.
      When I entered the number of tickets I want to book 
      And there are not enough seats available
      Then I should not be able to press on any seats
      
    Scenario: I want to book more then 8 tickets
      When I want to buy 10 child tickets 
      Then a message should tell me that i can't book more then 8 tickets at a time
      And I should not be able to press on any seats

    Scenario: I want to book a specific seat thats taken
      When I enter 1 ordenary ticket for the move 
      Then I should not be able to press seats that are taken.
      