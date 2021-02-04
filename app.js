const express = require("express");
const app = express();

app.get("/quitting-all-social-media", function(req, res) {
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.listen(port);