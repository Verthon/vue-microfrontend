<template>
  <div>
    <h1>Hello Nested App!</h1>
    <p>
      <router-link to="/">NESTED HOME</router-link>
      <span>|</span>
      <router-link to="/about">NESTED ABOUT</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
