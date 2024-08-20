<template>
  <ContentPage title="Blog posts" :categories="categories" :selectedCategory="selectedCategory" />
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: {name:"Select a topic", path: null}
    }
  },

  methods: {
  }
};
</script>

<style scoped>
</style>
