const express = require("express");
const router = express.Router();
const userModel = require("./users");
const bcrypt = require("bcrypt");
const saltRounds = 10;


router.post("/create", async (req, res) => {
  try {
    const hashedData = req.body;
    hashedData.password = await bcrypt.hash(hashedData.password, saltRounds);
    const createUser = await userModel.create(hashedData);
    res.json(createUser);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/update-events", async (req, res) => {
  try {
    const mail = req.body.mail;
    console.log(mail);
    const { eventsToUpdate } = req.body;
    console.log("event data:", eventsToUpdate);
    const user = await userModel.findOne({ mail });

    if (!user) {
      return res.status(404).json({ error: "User not found update error" });
    }
    eventsToUpdate.forEach((event) => {
      if (user[event] !== undefined) {
        user[event] = !user[event];
      }
    });

    await user.save();

    res.json({ message: "Events updated successfully", user });
  } catch (error) {
    console.error("Error updating events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-user", async (req, res) => {
  try {
    const mail = req.body.mail;
    const user = await userModel.findOne({ mail });
    console.log("Server user data:", user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Received login request for email:", email);

    const user = await userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log("Invalid email or password");
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    user.isLoggedIn = true;
    await user.save();

    console.log("User logged in successfully");
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/logout", async (req, res) => {
  try {
    const mail = req.body.mail;
    const user = await userModel.findOne({ mail });
    user.isLoggedIn = false;
    await user.save();
    // req.session = null;
    res.json({ success: true, message: req.session.mail });
    console.log(req.session.mail);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
