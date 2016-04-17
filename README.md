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

##How to lint your source files
`npm run lint`

Will run eslint on all your js/jsx files inside the src directory. If you use Sublime Text 3 and would like to lint your code follow [this tutorial](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.y7kt7x4qa) Sublime should auto detect the .eslintrc file and apply the linting rules.

##How to test on mobile devices
Get your computers ip address [OSX](http://www.wikihow.com/Find-Your-IP-Address-on-a-Mac) [Windows](http://www.wikihow.com/Find-Your-IP-Address-(Windows-7/8,-Windows-XP) then type your computers ip address on your mobile device or any other PC on the same network and append the port `8080` to your ip address. So if your ip address is `192.168.2.10` in order to view the site you would type `192.168.2.10:8080` in your browser and watch Hot Module Reload do it's magic when you edit and save changes.

Let me know if you find any issues, happy deving.
