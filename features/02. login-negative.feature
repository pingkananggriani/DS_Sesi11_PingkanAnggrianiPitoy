@digital-skola @login
Feature: Swag Labs - Login - Negative
  Background: User on the login page
      Given Pingkan is on the login page

  @negative1
  Scenario: As a locked_out_user, I should get error message
    When Pingkan login with "locked_out_user" credential
    Then Pingkan should see error "Epic sadface: Sorry, this user has been locked out."


  @negative2
  Scenario: As a problem_user, I should get error on home page
    When Pingkan login with "problem_user" credential
    Then Pingkan should see home page with all product using dog image

  @negative3
  Scenario: As a performance_glitch_user, I should get glitch
    When Pingkan login with "performance_glitch_user" credential
    Then Pingkan should get glitch and see home page 

  @negative4
  Scenario: As a error_user, I should get error on remove cart
    When Pingkan login with "error_user" credential
    Then Pingkan should see home page, add cart, and cant remove

  @negative5
  Scenario: As a visual_user, I should get failure home page
    When Pingkan login with "visual_user" credential
    Then Pingkan should see failure home page