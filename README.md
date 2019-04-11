# burger

https://tranquil-dusk-27840.herokuapp.com/

## Description

A simple app that accepts inputs and adds them to the list of burger names in the database and renders that to the left side of the screen with a "devour" button.  When the button is clicked, the burger moves to the right side of the screen.

![image](https://user-images.githubusercontent.com/15148861/55929160-4fb38100-5bd0-11e9-9c91-a15e15fc6daf.png)

## Technologies Used

* SQL & MySQL Database
* Express with Router
* Node.js
* Handlebars
* Javascript, JQuery, CSS

## NPM Packages Used

* Express (https://www.npmjs.com/package/express)
* Express-handlebars (https://www.npmjs.com/package/express-handlebars)
* MySQL (https://www.npmjs.com/package/mysql)
* dotenv (https://www.npmjs.com/package/dotenv)

## Install

After cloning the respository, run `npm install` to include the required packages.  To run locally, use the schema file to setup a MySQL database and create a .env file to include your own credentials in the connection.js file.

## Usage

This app was created to learn the Model-View-Controller framework and the use of handlebars to render UI from the backend.

## Roadmap

Possible future improvements:
* Adding a delete option for the burger items to remove them from the database
* A better UI that is more robust and aesthetically pleasing
