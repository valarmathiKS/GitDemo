Feature: verify login Functionality

  Background:
    Given I navigate to home page


  Scenario Outline  Verify Login
    When I given my "<Id>" in username
    And I given my "<Password>" in Password
    And I click Login Button
    Then i Shoud see the "<expectedUri>"

    Examples:
      | Id          | Password | expectedUri |
      | Valar.mathi | Raghu    | login       |
      | Supriya     | Parthi   | Login       |




