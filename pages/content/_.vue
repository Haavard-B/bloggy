<template>
  <article>
    <center class="container">
        <TextTitle :title="page.title" />
        <h2 class="grey--text mt-2 font-weight-thin">{{ page.description }}</h2>
        <p v-if="page.date" class="grey--text mt-2">{{ page.date }}</p>
    </center>
    <div class="rounded py-6">
      <nuxt-content class="px-5" :document="page" />
    </div>
    <center>
      <v-img max-width="50rem" max-height="50rem" :src="page.coverImage" class="mt-10" />
    </center>
  </article>
</template>

<script>
export default {
  layout: "blogs",

  head() {
    return {
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: "https://min-blogg.netlify.app/content/" + this.$route.params.pathMatch,
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://min-blogg.netlify.app/content/" + this.$route.params.pathMatch,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.page.title,
        },
        {
          hid: "title",
          property: "title",
          content: this.page.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.page.coverImage,
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "X_twitter:site",
          property: "X_witter:site",
          content: "X_@x",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.page.title,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.page.description,
        },
        {
          hid: "description",
          property: "description",
          content: this.page.description,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.page.coverImage,
        },
      ],
    };
  },

  beforeMount() {
  },

  async asyncData({ $content, $axios, params }) {
    return {
      page: await $content(params.pathMatch).fetch(),
    }
  },
}
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  border-radius: 10px;
}
</style>


<style scoped>
div.rounded {
  border-top: 2px solid #dddddd77;
  border-bottom: 2px solid #dddddd77;
}
</style>
