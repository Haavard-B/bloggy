<template>
  <ContentPage title="Blog posts" :categories="categories" :selectedCategory="selectedCategory" />
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: {name:"Select a topic", path: null},
      categories: [
        {name:"projects", path: "blog/projects"},
        {name:"essays", path: "blog/essays"},
        {name:"other thoughts", path: "blog/other_thoughts"},
        {name:"exercise log and notes", path: "blog/exercise_logs_and_notes"},
      ],
    }
  },

  methods: {
  }
};
</script>

<style scoped>
</style>
