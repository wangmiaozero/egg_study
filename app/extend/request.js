// app/extend/request.js
module.exports = {
  foo_3() {
    return this.connection;
  },
};
/* module.exports = {
  get foo() {
    return this.get('x-request-foo');
  },
}; */