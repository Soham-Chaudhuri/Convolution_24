// var express = require("express");
// var router = express.Router();
// const userModel = require("./users");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// router.post("/create", async (req, res) => {
//   try {
//     bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
//       if (err) {
//         throw err;
//       }
//       const cryptdata = { ...req.body, password: hash };
//       const createUser = await userModel.create(cryptdata);
//       res.json(createUser);
//       req.session.mail = createUser.email;
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/update-events", async (req, res) => {
//   try {
//     const mail = req.session.mail;
//     console.log(mail);
//     const { eventsToUpdate } = req.body;
//     console.log("event data:", eventsToUpdate);
//     const user = await userModel.findOne({ mail });

//     if (!user) {
//       return res.status(404).json({ error: "User not found update error" });
//     }
//     eventsToUpdate.forEach((event) => {
//       if (user[event] !== undefined) {
//         user[event] = !user[event];
//       }
//     });

//     await user.save();

//     res.json({ message: "Events updated successfully", user });
//   } catch (error) {
//     console.error("Error updating events:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// router.get("/get-user", async (req, res) => {
//   try {
//     const mail = req.session.mail;
//     const user = await userModel.findOne({ mail });
//     console.log("Server user data:", user);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/logout", async (req, res) => {
//   try {
//     const mail = req.session.mail;
//     const user = await userModel.findOne({ mail });
//     user.isLoggedIn = !user.isLoggedIn;
//     await user.save();
//     req.session.destroy();
//     res.json({ success: true, message: "Successfully logged out" });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const mail = req.body.email;
//     req.session.mail = mail;
//     const user = await userModel.findOne({ mail });
//     bcrypt.compare(req.body.password, user.password, function (err, result) {
//       user.isLoggedIn = result;
//       res.json(result);
//     });
//     await user.save();
//     console.log("12345");
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const userModel = require("./users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/create", async (req, res) => {
  try {
    const hashedData = req.body;
    hashedData.password = await bcrypt.hash(hashedData.password,saltRounds);
    const createUser = await userModel.create(hashedData);
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
    const mail = req.session.mail;
    const user = await userModel.findOne({ mail });
    console.log("Server user data:", user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const mail = req.body.email;
    req.session.mail = mail;
    const user = await userModel.findOne({ mail });

    if (!user || !await bcrypt.compare(req.body.password,user.password)) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    user.isLoggedIn = true;
    await user.save();

    res.json(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/logout", async (req, res) => {
  try {
    const mail = req.session.mail;
    const user = await userModel.findOne({ mail });
    user.isLoggedIn = false;
    await user.save();
    req.session.destroy();
    res.json({ success: true, message: "Successfully logged out" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
