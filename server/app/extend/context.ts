module.exports = {
  returnBody(status, data = {}, msg = "") {
    this.status = status;
    this.body = {
      code: status,
      data,
      msg
    };
  }
};
