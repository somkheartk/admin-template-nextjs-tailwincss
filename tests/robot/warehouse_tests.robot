*** Settings ***
Library           SeleniumLibrary
Library           RequestsLibrary
Suite Setup       Setup Test Suite
Suite Teardown    Teardown Test Suite

*** Variables ***
${FRONTEND_URL}    http://localhost:3000
${BACKEND_URL}     http://localhost:4000/api
${BROWSER}         headlesschrome
${ADMIN_EMAIL}     admin@test.com
${ADMIN_PASSWORD}  admin123

*** Test Cases ***
Test Login Page Loads
    [Documentation]    Verify that the login page loads successfully
    Open Browser    ${FRONTEND_URL}/en/login    ${BROWSER}
    Wait Until Page Contains    Login to your account
    Close Browser

Test User Registration
    [Documentation]    Test user registration flow
    Open Browser    ${FRONTEND_URL}/en/register    ${BROWSER}
    Wait Until Page Contains    Create an account
    Input Text    name=name    Test User
    Input Text    name=email    test${TIME}@test.com
    Input Text    name=password    testpassword123
    Click Button    Register
    Wait Until Page Contains    Dashboard    timeout=10s
    Close Browser

Test Dashboard Access Without Auth
    [Documentation]    Verify dashboard requires authentication
    Open Browser    ${FRONTEND_URL}/en/dashboard    ${BROWSER}
    Wait Until Page Contains    Login to your account    timeout=10s
    Close Browser

Test Language Switching
    [Documentation]    Test language switching functionality
    Open Browser    ${FRONTEND_URL}/en/login    ${BROWSER}
    Wait Until Page Contains    Login to your account
    Click Element    xpath=//button[contains(@class, 'language')]
    Click Element    xpath=//button[contains(text(), 'ไทย')]
    Wait Until Page Contains    เข้าสู่ระบบบัญชีของคุณ
    Close Browser

Test API Health Check
    [Documentation]    Verify backend API is accessible
    Create Session    backend    ${BACKEND_URL}
    ${response}=    GET On Session    backend    /
    Should Be Equal As Strings    ${response.status_code}    200

Test Product API Authentication
    [Documentation]    Verify product API requires authentication
    Create Session    backend    ${BACKEND_URL}
    ${response}=    GET On Session    backend    /products    expected_status=401
    Should Be Equal As Strings    ${response.status_code}    401

*** Keywords ***
Setup Test Suite
    [Documentation]    Setup for the test suite
    Set Selenium Speed    0.5
    ${TIME}=    Get Time    epoch
    Set Global Variable    ${TIME}

Teardown Test Suite
    [Documentation]    Cleanup after test suite
    Close All Browsers
