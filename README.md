# Playwright Automation Demoqa Text Box Form 
 The project uses Playwright with the Page Object Model (POM) to automate form submission on DemoQA's Text Box page. 


📋 Tech Stack

Playwright 
TypeScript
Page Object Model (POM) 

### Installation 

Clone the repository:
   ```bash
   git clone https://github.com/your-username/demoqa-testing.git


Purpose of the Framework 

The goal of the framework is to automate UI testing for the DemoQA Website using the Playwright test tool. Specifically, this project tests the Text Box form, simulating real user actions like navigating the site, entering the data, clicking buttons, and verifying outpiut. 

I adopted the Page Object Model (POM)- design pattern to keep my framework maintainable, and scalable. 

### Framework Componenets 
1. BasePage- The Foundation 
This abstract acts as the common parent class for all page objects. It contains generic helper methods used by any specific page class. 
 Key Methods:
 . navigate(path:string)- Navigates to any path on the base URL. 
 . clickElemenet(locator:string)- Clicks any element on the page using its locator. 

2. ElementsTextBoxPage – Page Object for the Text Box Form. 


 



This is a test automation framework built using Playwright, a tool that help automate browsers like Chrome, Firefox, and Safari.






It automatically opens a website — DemoQA — clicks through to a form, fills it out, submits it, and checks that the output is correct.
