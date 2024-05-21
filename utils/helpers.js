const if_equals = (arg1, arg2, options) => {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
};

module.exports = if_equals;
