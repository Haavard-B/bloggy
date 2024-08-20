<template>
  <v-app style="background: #f2f2f2">
    <v-main>
      <v-container>
        <!--<center>
          <nuxt-link to="/">
            <v-btn small color="orange" text>home</v-btn>
          </nuxt-link>
        </center> -->
        <slot name="main">
            MAIN SLOT
        </slot>
      </v-container>
    </v-main>
  </v-app>
</template>