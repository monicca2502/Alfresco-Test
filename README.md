Alfresco Assignment Project : 

i. Description Describes of how to run the automation test

To run the automation test follow these steps:

    Open VS Code

    Open Project folder

    Open Terminal of VS Code

    Start Selenium Webdriver by command “webdriver-manager start”

    Open new terminal window without closing this terminal

    Enter command as “protractor conf.js”

    Pressing return will start the testcase run and shows the summary in brief

ii. Explanation describes the choice made in the solution

    This project is using Protractor Node JS Framework. The project is based on Page Object Design pattern. Due to this the page objects are stored in separate files as per the pages.

    The framework is using Jasmine and is having 1 test case in describe, it and expect format. All the test case steps are independent of each other.

    The conf.js file has configuration of project and currently set to run on chrome driver only.

iii. Prerequisites List here what/if anything needs to be installed

    VS Code is downloaded from website : https://code.visualstudio.com/download

    Java 1.8 from website https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

    Node JS from website : https://nodejs.org/en/download/

    Protractor by “npm install -g protractor”

    Selenium Webdriver start by “webdriver-manager start”
