<template>
  <div>
    <center class="mt-4">
      <TextTitle title="My name is Kristian" />
      <p class="mb-4">
        <strong>{{daysSinceBirth}}</strong> days old <span class="grey--text">({{new Date().getFullYear() - 1999}} years)</span>
        <v-icon color="orange darken-2" class="ml-0">mdi-calendar</v-icon>
      </p>

      <p class="mb-4">
        And I (still) have a <strong>plant</strong>
        <v-icon color="green" class="ml-0">mdi-flower</v-icon>
      </p>

      <MyHr class="my-12" />
    </center>

    <MyCols :pages="pages" :cols="12" :xl="3" :lg="3" :md="12" :xs="12" v-slot="{ page }">
      <center>
        <nuxt-link :to="page.to">
          <v-btn text x-large color="blue darken-2" dark>{{
            page.title
          }}</v-btn>
        </nuxt-link>

        <p class="grey--text">{{ page.description }}</p>
      </center>
    </MyCols>

  </div>
</template>

<script>
export default {
  computed: {
    daysSinceBirth() {
    const date1 = new Date("1999-02-01");
    const date2 = new Date();

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return String(diffInDays + 1).replace(/(.)(?=(\d{3})+$)/g,'$1 ')
}
  },
  data() {
    return {
      pages: [
        {
          title: "Read my notes",
          description: "They are not too messy",
          to: "/content",
        },
        {
          title: "CV",
          description: "And other fun stuff",
          to: "/cv",
        },
        /* { */
        /*   title: "Consulting", */
        /*   description: "And what services I offer", */
        /*   to: "/consulting", */
        /* }, */
      ],
    };
  },
};
</script>
