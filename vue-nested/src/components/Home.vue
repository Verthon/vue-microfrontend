<template>
  <div>
    <div>Nested HOME</div>
    <button @click="decrement">Decrement</button>
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
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
