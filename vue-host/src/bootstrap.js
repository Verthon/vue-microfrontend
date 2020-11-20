import { run as runNested } from "nested/expose";

export async function run() {
  const { vm } = require("./app.js");
  vm.$mount("#app");
}

run();

runNested("#nestedApp");
