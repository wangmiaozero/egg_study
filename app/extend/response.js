// app/extend/response.js
module.exports = {
  set foo_2(value) {
    this.set('x-response-foo', value);
  },
};