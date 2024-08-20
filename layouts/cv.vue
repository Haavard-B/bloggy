<template>
  <v-app style="background: black">
    <v-main>
      <v-container>
        <center>
          <nuxt-link v-if="$route.path != '/'" to="/">
            <v-btn small color="orange" text>home</v-btn>
          </nuxt-link>
          <nuxt-link v-if="$route.path != '/cv'" to="/cv">
            <v-btn small color="orange" text>cv</v-btn>
          </nuxt-link>
        </center>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>