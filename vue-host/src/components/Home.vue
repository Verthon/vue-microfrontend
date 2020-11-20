<template>
  <div>
    <div>HOME</div>
    <button @click="increment">Increment</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>
