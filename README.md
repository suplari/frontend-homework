Suplari Frontend Simple Project
==

This is a simple front-end Angular project where you will build out a basic shopping cart.

You will develop on top of the existing barebones JavaScript, HTML, and SCSS structure we have provided.

**Please spend no more than 30 minutes to 1 hour.** The goal is neither perfection nor completion; rather, it is to help Suplari gain a basic sense of your general skills, approach to development, and problem-solving. (do not include reading this as part of that time limit!)

## Guidelines
1) Much of the basic structure is already there for you to work with. For example, you may need to bind variables or functions to the template from the TypeScript file.
2) You are free to add or change parts of the template to make it more your own or fit your development needs (keep the time constraint in mind, however).
3) Feel free to consult the [Angular documentation](https://angular.io/guide/quickstart) if you are not familiar with the framework.
4) Do not copy from outside sources.

## Design Requests
Relevant files: app.component.html, app.component.scss, app.component.ts, products.ts

* User should be able to:
  - Add products from the list to the cart
  - Remove added items from the cart
  - Clear the cart contents
* Product names should be randomly generated using the provided name arrays.
* Products should have an image (can be anything).
* The cart should display the total price of the products in it.
* Update the styling for the Product Cards and the Cart so the content is presentable and easy to read.
  - You can make your own adjustments to the template as you want.
* When the cart is empty, show the "Empty" message and hide the Clear Cart button.

## Setup
Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window.

### Installation and Running the Application
1) From GitHub, fork and clone the repository on your computer.
2) In the app folder, run:
`$ npm install`
3) Run the application with the following script. The application should open in your browser, and refresh as you make changes:
`$ npm run start`
Alternatively, you can use the Angular CLI to build the app, and then navigate in your browser to http://localhost:4200 - `$ ng build`
