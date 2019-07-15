Feature: Verify home page Title

  Background:
    Given I navigate to home page

  Scenario: Verifi the Title of QaClick Academy
    Then I should see "QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy"


  Scenario: verify login link in Home page
    When i click the "Login" link
    Then I should see page"QaClickAcademy"




