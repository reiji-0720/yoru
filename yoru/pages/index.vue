<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-container >
      <img src="~/assets/main_logo.png" width="100%" class="px-16">
      <v-row justify="center">
        <h2>Sign in</h2>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  
}
</script>
<style scoped>


h2{
  font-family: 'roboto';
  font-size: 25px;
}
</style>