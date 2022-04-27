<template>
  <div>
    <v-system-bar app window>
      <div>筑波大学CO2ゼロ・エミッションセンター</div>
    </v-system-bar>
    <v-app-bar id="title_bar" :color="app_bar_color" app>
      <NuxtLogo id="title_logo" />
      <v-toolbar-title id="title_string"
        >CO2 Zero Emission Center</v-toolbar-title
      >
      <v-row justify="end">
        <v-col> <v-spacer style="width: 1rem" /></v-col>
        <v-col v-for="item in links" :key="item" align="center" class="pa-0">
          <v-card
            flat
            link
            to="/"
            fluid
            :color="app_bar_color"
            style="height: 64px"
          >
            <v-card-title style="display: inherit">{{
              item
            }}</v-card-title></v-card
          >
        </v-col>
        <v-col> <v-spacer style="width: 2rem" /></v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    links: ['home', 'members', 'events', 'publish', 'contact'],
    app_bar_color: '#FAFAFA',
  }),
}
</script>

<style>
#title_logo {
  transform: scale(0.3);
}
</style>
