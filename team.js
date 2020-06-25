const teamProfile = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
const employeeType = process.argv[2];

// If they are a user... they will also need to provide a "name"
const userName = process.argv[3];

// And they will need to provide a "location"
const userEmail= process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
const myAdmin = new teamProfile();

if (loginType === "admin") {
  myAdmin.getData();
}
else {
  myAdmin.newUserSearch(userName, employeeType, userEmail);
}