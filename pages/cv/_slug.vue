<template>
  <div>
    <TextTitle
      class="white--text mt-8 pb-12"
      :title="$route.params.slug"
    />

    <center v-for="page in pages" v-bind:key="page.title">
      <v-row>
        <v-col style="margin-bottom:100px;">
          <p class="grey--text ma-0 pa-0">{{page.year}}</p>
          <TextTitle class="white--text" :title="page.title" />
          <CvTags class="mb-4" style="max-width:800px;" color="blue" :tags="page.technologies" />
              <v-card max-width="800" class="pb-10 px-14">
            <article class="pa-2">
            <nuxt-content :document="page" class="text-left" />
          </article>
          <MyHr />
            <img style="max-width:100%; height:auto;" :src="page.image" />
          </v-card>
        </v-col>
      </v-row>
    </center>
  </div>
</template>

<script>
export default {
  layout: "cv",

  async asyncData({ $content, params }) {
    return {
      pages: await $content("/cv", params.slug).sortBy("slug", "desc").fetch(),
    };
  },
};
</script>
