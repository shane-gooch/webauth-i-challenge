const bcrypt = require("bcryptjs");

const Routes = require("../routes/route-model.js");

module.exports = function restricted(req, res, next) {
  // let { username, password } = req.headers;
  console.log(req.session.username);
  if (req && req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
  //Without session or cookies
  // if (username && password) {
  //   Routes.findUser({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: "You must be loggied" });
  //       }
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // } else {
  //   res.status(400).json({ message: "Please provide valid credentials" });
  // }
};
