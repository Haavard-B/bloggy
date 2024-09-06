<template>
  <nuxtLink :to="`/content/${selectedCategory.path}/${page.slug}`">
      <v-card class="motion pa-4" width="350">
          <h2>{{ page.title }}</h2>
          <p class="mt-4">{{ page.description }}</p>
          <p v-if="page.date" class="mt-4">{{ page.date }}</p>
          <div class="mt-5 mb-4"></div>

          <v-img
		  v-if="page.coverImage"
          height="10"
          :src="`${page.coverImage}`"
          class="align-end"
          min-height="300"
        />
      </v-card>
    </nuxtLink>
</template>

<script>
export default {
    props: ["selectedCategory", "page"],

    data() {
      return {}
    },

    beforeMount() {
    }
}
</script>

<style scoped>
.motion {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  -webkit-transition: all 0.1s ease-in;
}
.motion:hover {
  top: -10px;
  background-color: rgb(246, 196, 102);
}
</style>
