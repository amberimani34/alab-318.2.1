const express = require("express");
const router = express.Router();
const path = require("path");

// render profile.ejs
router.route("/profile/:username").get((req, res) => {
  const username = req.params.username;
  res.render("profile", { username });
});

// route for downloading image file
router.route("/download").get((req, res) => {
  const file = path.join(__dirname, "../public", "image.gif");
  res.download(file, "image.gif", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
    }
  });
});

module.exports = router;

