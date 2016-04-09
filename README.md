# WRES-SK
Webpack React ESLint Sass Starter Kit

Very simple React Webpack project with ESlint, Airbnb ESLint rules and Sass loader to get you up and running quickly.

##Dependencies
[Nodejs](https://nodejs.org/en/)

##Install via

`npm install`

##How to run it
`npm run dev`

Starts webpack-dev-server with Hot Module Reload so your changes are reflected without refreshing the browser.

##How to add backend server

Edit the **target** property in `webpack.config.js` and insert your backend server URL ie: `http://localhost:1337`

##How do I make a Ajax request to my backend server in my apps code?

If your ajax request URL looks like this `http://localhost:1337/users` in your code it should look like this `/api/users` any call made to your backend server should be prepended with **/api** webpack will then forward this request to your backend server.



