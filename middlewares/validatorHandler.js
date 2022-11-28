const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    // abortEarly : false -> esto se hace para que envie todo los errores a la vez
    const { error } = schema.validate(data, { abortEarly: false});
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
