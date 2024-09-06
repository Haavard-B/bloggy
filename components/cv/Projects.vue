<template>
  <div>
    <v-card class="pa-4">
      <TextTitle :title="title" />
      <h1 class="title">{{title}}</h1>
      <center>
        <p class="grey--text">{{ description }}</p>
        <v-img class="mb-10" width="400" :src="imageUrl" />
      </center>
      <slot />
      <v-row align="center" justify="center">
        <v-col v-for="skill in technologyUsed" v-bind:key="skill" class="my-2">
          <v-chip color="orange"  class="ma-2" >
            {{ skill }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "description",
    "date",
    "imageUrl",
    "technologyUsed",
    "amountOfMonths",
    "yearFromTo",
  ],
};
</script>

<style>
</style>