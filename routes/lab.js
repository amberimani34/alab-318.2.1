const express = require("express");
const router = express.Router();

// render index.ejs
router.route("/").get((req, res) => {
  res.render("index", req.query);
});

router.route("/submit").post((req, res) => {
  const username = req.body.username;
  console.log("Success! username is: " + username);

  // after submitting username, redirect to the profile page
  res.redirect(`/profile/${encodeURIComponent(username)}`);
});

module.exports = router;