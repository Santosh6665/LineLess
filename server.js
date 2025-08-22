const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db");   // DB connection
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sign Up Route
app.post("/signup", async (req, res) => {
  try {
    const { name, userId, contact, email, password } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      userId,
      contact,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.json({ success: true, message: "User registered successfully ✅" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "User already exists ❌" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));



// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid user ❌" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password ❌" });
    }

    res.json({ success: true, message: "Login successful ✅", user: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error ❌" });
  }
});
