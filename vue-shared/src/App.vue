<template>
  <div>
    <h1>Hello Shared App!</h1>
    <p>
      <router-link to="/">SHARED HOME</router-link>
      <span>|</span>
      <router-link to="/about">SHARED ABOUT</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
