<template>
  <ContentPage title="Blog posts" :categories="categories" :selectedCategory="selectedCategory" />
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: {name:"Select a topic", path: null},
      categories: [
        {name:"checklists", path: "blog/checklists"},
        {name:"engineering", path: "blog/engineering"},
        {name:"philosophy", path: "blog/philosophy"},
        {name:"tutorials", path: "blog/tutorials"},
        {name:"trading", path: "blog/trading"},
        {name:"music", path: "blog/music"},
        {name:"life", path: "blog/life"},
      ],
    }
  },

  methods: {
  }
};
</script>

<style scoped>
</style>
