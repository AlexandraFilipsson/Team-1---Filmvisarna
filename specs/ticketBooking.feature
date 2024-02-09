Feature: Ticket booking before confirmation
As a user I want be abble to choose film that I want to watch, choose date, time, amount of tickets and seat

    
    Background: 
        Given that User on the first page
        And User choose movie that User want to see, date with time and amount of tickets
        

    Scenario: Ticket booking before confirmation
        Then User choose seat
        And user should be abble to prees button button Boka biljet
        And be redirected to booking confirmation page


   Scenario: Ticket booking  when forgot to choose seat 
        Then forgot to press to seats
        And button boka biljet should be disabled

