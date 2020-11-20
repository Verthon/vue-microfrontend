export async function run(id) {
  const { vm } = require("./app.js");
  vm.$mount(id);
}
