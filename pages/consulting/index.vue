<template>
  <ContentPage title="Consulting" :selectedCategory="selectedCategory" />
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: {name:"Consulting", path: "consulting"},
    }
  },

  methods: {
  }
};
</script>

<style scoped>
</style>
