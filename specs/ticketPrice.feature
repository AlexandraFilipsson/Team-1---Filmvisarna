Feature: Ticketfunction and calculation

    As a user I want to be able to choose a certain amount of tickets and type and be sure to know that
    the sum outcome is correct

    Scenario Outline: Add <ticketAmount> <ticketType> to the booking and check that the sum is correct
        Given that I am on the "bokning"-page
        When I add "<ticketAmount>" of "<ticketType>"
        Then I want to see the correct sum in "Total kostnad: "

        Examples:
            | ticketAmount | ticketType |
            | 3            | 0          |
            | 1            | 1          |
            | 3            | 2          |


