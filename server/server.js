// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable
// and fallback to 3000
const PORT = process.env.PORT || 3000;


app.get("/hello", async (request, response) => {
    // The `.send()` method returns HTML to the browser
    response.send("hello world");
})


// Start the web server listening on the provided port.
app.listen(PORT, () => { 
    console.log(`Express web server listening on port ${PORT}`);
  });