@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Pingkan is on the login page
    When Pingkan login with "standard_user" credential
    Then Pingkan should see home page