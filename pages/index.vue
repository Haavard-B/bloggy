<template>
  <ContentPage title="Blog posts" :categories="categories" :selectedCategory="selectedCategory" />
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: {name:"Select a topic", path: null},
      categories: REPLACE_WITH_FOLDER_INFO,
    }
  },

  methods: {
  }
};
</script>

<style scoped>
</style>
