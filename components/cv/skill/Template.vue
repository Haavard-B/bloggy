<template>
  <div>
    <TextTitle class="white--text" :title="title" />
    <v-expansion-panels>
    <v-expansion-panel
      v-for="e in elements"
      :key="e.name"
    >
    <v-expansion-panel-header disable-icon-rotate>
          {{e.name}}
          <template v-slot:actions>
            <v-icon :color="e.color" x-large>
              {{e.icon}}
            </v-icon>
          </template>
        </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p>
          {{e.desc}}
        </p>
        <v-chip class="mx-2" v-for="l in e.list" v-bind:key="l">
          {{l}}
        </v-chip>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: ["elements", "title"],
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
};
</script>

<style>
</style>
