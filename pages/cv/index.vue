<template>
  <center>
    <h1 class="mt-8">My name is <span class="orange--text">Kristian</span></h1>
    <p>And this is my <strong class="orange--text">CV</strong></p>

    <div style="max-width:80rem;" class="my-16">
      <MyCols :pages="pages" cols="12" md="6" lg="3"  xl="3" v-slot="{ page }">
        <center>
          <nuxt-link :to="page.to">
            <v-btn text x-large color="blue darken-2" dark>{{
              page.title
            }}</v-btn>
          </nuxt-link>

          <p class="grey--text">{{ page.description }}</p>
        </center>
      </MyCols>

      <MyHr />

      <center>
         <img class="pt-10" style="max-width:100%; height:auto;" src="/public/fall.jpg" />
      </center>

    </div>
  </center>
</template>

<script>
export default {
  layout: "cv",

  async asyncData({ $content }) {
    return {
      pages: [
        {
          title: "About me",
          description: "A quick summary of who I am",
          to: "/cv/about-me",
        },
        {
          title: "My work experience",
          description: "and responsibilities",
          to: "/cv/jobs",
        },
        {
          title: "my projects",
          description: "Mostly freelance",
          to: "/cv/projects",
        },
        {
          title: "Certificates",
          description: "And courses",
          to: "/cv/certificates",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

h2 {
  font-weight: lighter;
  color: white;
}

p {
  color: white;
}
</style>
