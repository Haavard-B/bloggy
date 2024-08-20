<template>
  <div class="white--text pb-6" style="border-color: grey; border-style: solid; border-width: thin; max-width:350px;">
      <h2 style="font-size:2rem;" class="mb-2 font-weight-thin">{{skillsetSubFolder}}</h2>
      <MyHr />
      <MyLoader v-if="skills == null" />
      <div v-else v-for="s in skills" v-bind:key="s.title">
          <nuxt-link :to="`/content/cv/skillsets/${skillsetSubFolder}/${s.slug}`">
            <v-btn dark text x-large>
              {{s.title}} <v-icon x-large class="ml-4" :color="s.color">{{s.icon}}</v-icon>
          </v-btn>
          </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    props: ["skillsetSubFolder", "icon"],

    async beforeMount() {
        this.skills = await this.$content("cv/skillsets/", this.skillsetSubFolder)
            .only(['slug', 'title', 'icon', 'color'])
            .fetch()
    },

    data() {
        return {
            displayContent: null,
            skills: null,
        }
    },
}
</script>

<style>
</style>
