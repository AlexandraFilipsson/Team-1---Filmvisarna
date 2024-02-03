Feature: Ticket booking confirmation 
As a user I want be abble to get confirmation of my booking 


    Background: Ticket booking before confirmation
        Given that User on the first page
        And User choose movie that User want to see, 1 ticket, date with time
        When User redirectred to Bekreftlseoversikt page


    Scenario: Booking confirmation when User is logging in after booking done
        Then User press log in button and login with correct credentails
        And on Berkreftelseoversikt page can see Bekräftelse button
        And pressing to bekräfta can see table with booking information

    

    Scenario: Booking confirmation when User gets confirmation without log in as a member
        Then add valid e-mail in field email
        And pressing to Bekräfta button can see table with booking information