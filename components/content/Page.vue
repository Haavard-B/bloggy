<template>
  <div>
    <TextTitle :title="title" />
    <center v-if="categories">
      <v-btn
        v-for="c in categories"
        small
        text
        class="mx-8 my-2"
        :color="c.name == selectedCategory.name ? 'blue' : 'grey'"
        v-bind:key="c.path"
        @click="selectedCategory = c; fetch()"
      >
      {{c.name}}
      </v-btn>
    </center>

    <MyHr class="mb-12" />
    <center v-if="loading">
      <MyLoader />
    </center>
    <center v-else-if="selectedCategory.name == 'Select a topic'">
        <TextTitle class="pt-8 grey--text" title="Select a topic" />
      </center>
      <center v-else-if="articles == null || articles.length == 0">
        <TextTitle class="pt-8 grey--text" title="No posts present in this category" />
      </center>
      <div v-else>
        <center>
          <MyCols
            :xs="12"
            :sm="12"
            :md="6"
            :lg="4"
            :xl="4"
            :pages="articles"
            v-slot="{ page }"
          >

          <ContentCard :page="page" :selectedCategory="selectedCategory" />
          </MyCols>
        </center>
      </div>
  </div>
</template>

<script>
export default {
  props: ["title", "categories", "selectedCategory"],
  data() {
    return {
      articles: null,
      query: null,
      loading: false,
      // selectedCategory: {name:"Select a topic", path: null},
    };
  },

  async beforeMount() {
    if (this.selectedCategory.name == "Consulting") {
      console.log("Do nothing")
    }
    else {
      const c = localStorage.getItem("selectedCategory");
      if (c != null) {
        this.selectedCategory = JSON.parse(c)
      }
      else {
        this.selectedCategory = {name:"Select a topic", path: null}
      }
    }

    this.fetch()
  },

  methods: {
    async fetch() {
    if (this.selectedCategory.name != "Consulting") {
      localStorage.setItem("selectedCategory", JSON.stringify(this.selectedCategory))
    }

      this.loading = true;

      if (this.selectedCategory.name != "Select a topic") {
        this.articles = await this.$content(this.selectedCategory.path)
            .only([
              "title",
              "description",
              "date",
              "pathPrefix",
              "slug",
              "coverImage",
              "readButton",
              "readable",
            ])
            .sortBy("date", "desc")
            .limit(null)
            .skip(0)
            .fetch()
      }

      this.loading = false;
    },
  }
};
</script>

<style scoped>
</style>
