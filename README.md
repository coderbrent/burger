# burger app
A web app constructed in an MVC pattern to log the types of burgers i'd like to eat and track the ones I haven't eaten yet (AKA: a todo list).

### Objective
The idea is to build a full stack application that incorporates a template driven front end(handlebars) with a mySQL db on the backend so that the items persist throughout page refreshes.

### Patterns & Strategies
I built this out in the MVC format. I created a small ORM on my own to handle some basic CRUD actions with my SQL db. 

### Dependencies

* MySQL
* Node.js
* Handlebars.js
* Bootstrap
* Express

### Some Difficulties I Experienced While Developing...
The hardest part of this project actually came down to just some misplaced arguments. While building my ORM, I accidentally re-ordered the arguments on the call back function in the SQL query. I placed results first and errors second. The mysql docs on npm clearly state it is the reverse! 

I spent a bit of time under the impression that the issue lie in the sanitization of the 'table' string I was attempting to pass into the query command. While time was spent troubleshooting, I did learn a good deal about SQL injection attacks and why it is good practice to escape all input that comes from the user. So not a total waste of time! :)
