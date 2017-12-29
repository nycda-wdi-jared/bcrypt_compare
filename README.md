# Encrypted Passwords/Bcrypt Compare

* Look at the user model and how the password is created
* A password should not be exposed anywhere, so ```bcrypt``` encrypts the password
* It creates a ```password_hash``` which is used for comparison when a user signs in
* When a user enter their password for sign in, ```bcrypt``` has a compare method to compare what the user has entered as their password against the password_hash in the database
* Set up your environment and your database, add some user records, and look at the bcrypt method in the route-controller.js file.
* Try to do a correct login & incorrect login. It will come back either true or false. bcrypt.compare is merely a method that returns a boolean.
* Remember to use postman for the routes since there is no ui set up

* In this example, using an ORM, so look at the connection between the model-controller.js & route-controller.js

http://codetheory.in/using-the-node-js-bcrypt-module-to-hash-and-safely-store-passwords/