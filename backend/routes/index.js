var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.post("/create", async (req, res) => {
  try {
    const createUser = await userModel.create(req.body);
    res.json(createUser);
    req.session.mail = createUser.email;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/update-events", async (req, res) => {
  try {
    const mail = req.session.mail;
    console.log(mail);
    const { eventsToUpdate } = req.body;
    console.log("event data:",eventsToUpdate);
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
    const mail = req.session.mail;
    const user = await userModel.findOne({ mail });
    console.log("Server user data:", user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get("/loggedin", function(req, res) {
  try {
   res.json(req.session.mail !== null);
   console.log(req.session.mail !== null);
  } catch (error) {
   res.status(500).json({ error: error.message });
  }
});

router.post("/loggedout", function(req, res) {
  try {
    req.session.destroy(function(err) {
      if (err) {
        res.status(500).json({ error: "Error destroying session" });
      } else {
        console.log("loggedout");
        res.status(200).json({ message: "Successfully logged out" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
