//const { User } = require('../models/User.cjs');
const db = require('../models/index.cjs');

module.exports = {
  async register(req, res) {
    try {
      const user = await db.User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        error: 'This email address is already being used.',
      });
    }
  },
};

// module.exports = {
//   register: (req, res) => {
//     res.send({
//       message: `Hello, ${req.body.email}. Have fun!`,
//     });
//     console.log(`${req.body.email}`);
//     // console.log(res);
//   },
// };
