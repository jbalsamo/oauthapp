const express = require("express");
const app = express();
const port = 3000;

const homePage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OAuth App</title>
  </head>
  <body>
    <h1>OAuth App</h1>
    <p>Click the button below to login</p>
    <button id="login">Login</button>
  </body>
</html>
`;

const authPage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OAuth App</title>
  </head>
  <body>
    <h1>You are now logged in!</h1>
    <p>Click the button below to logout</p>
    <button id="logout">Logout</button>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(homePage);
});

app.get("/login", (req, res) => {
  // TODO: Implement login
});

app.get("/callback", (req, res) => {
  // TODO: Implement callback
  res.send(authPage);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
