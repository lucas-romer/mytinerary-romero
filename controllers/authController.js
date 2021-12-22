const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authControllers = {
  signUpUser: async (req, res) => {
    const { name, lastname, email, password, photo, country, google } =
      req.body;
    try {
      const userExist = await User.findOne({ email });
      if (userExist) {
        res.json({
          success: false,
          error: "Email is already registered",
          response: null,
        });
      } else {
        const passwordHasheada = bcryptjs.hashSync(password, 10);
        const newUser = new User({
          name,
          lastname,
          email,
          password: passwordHasheada,
          photo,
          country,
          google,
        });
        const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
        await newUser.save();
        res.json({ success: true, response: { token, newUser }, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  readUsers: (req, res) => {
    User.find().then((response) => {
      res.json({ response });
    });
  },

  signInUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        res.json({
          success: false,
          error: "User does not exist",
          response: null,
        });
      } else {
        const passwordIsOk = bcryptjs.compareSync(password, user.password);
        if (!passwordIsOk) {
          res.json({
            success: false,
            response: user,
            error: "Email or password is incorrect. Try again",
          });
        } else {
          const token = jwt.sign({ ...user }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: {
              name: user.name,
              lastName: user.lastName,
              email: user.emal,
              photo: user.photo,
              token: token,
            },
            error: null,
          });
        }
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  token: (req, res) => {
    res.json(req.user);
  },
};

module.exports = authControllers;
