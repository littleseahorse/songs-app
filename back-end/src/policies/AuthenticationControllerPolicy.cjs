const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email address.',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `Password must contain alphanumeric characters.<br/>It must contain at least 8 characters, but not more than 32 characters.`,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information.',
          });
          break;
      }
    } else {
      next();
    }
  },
};
