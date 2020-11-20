<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">HOST HOME</router-link>
      <span>|</span>
      <router-link to="/about">HOST ABOUT</router-link>
      <span>|</span>
      <router-link to="/shared-about">SHARED ABOUT</router-link>
       <span>|</span>
      <router-link to="/nested">SHARED NESTED</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
