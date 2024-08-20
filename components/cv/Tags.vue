<template>
<div>
    <v-chip

            :color="color"
            class="white--text mx-4 mt-6"
            v-for="t in tags"
            v-bind:key="t"
            style="font-size:15px;"
            >{{ t }}</v-chip
          >
</div>
  
</template>

<script>
export default {
    props: ["color", "tags"]

}
</script>

<style>

</style>