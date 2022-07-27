const STATUS = require("../../utils/constant/status.constants");
const CustomError = require("../../utils/customError.util");

const routeNotImplemented = (req, res, next) => {
  const method = `[${req.method}]`;
  const message = `The route ${req.originalUrl} with method ${method} was not implemented`;
  if(req.originalUrl) throw new CustomError(STATUS.NOT_FOUND, message)
  next();
};

module.exports = routeNotImplemented;