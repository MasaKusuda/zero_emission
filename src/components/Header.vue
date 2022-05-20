<template>
  <div>
    <v-system-bar app window>
      <v-row align-content="center">
        <v-col align="center">
          <div>
            ゼロCO<sub>2</sub>エミッション機能性材料開発研究センター R&D
            Center for Zero CO2 Emission with Functional Materials
          </div>
        </v-col>
      </v-row>
    </v-system-bar>
    <v-app-bar id="title_bar" :color="app_bar_color" app flat>
      <NuxtLogo id="title_logo" />
      <v-toolbar-title id="title_string"
        >Zero CO<sub>2</sub> Emission Center</v-toolbar-title
      >
      <v-row justify="end">
        <v-col> <v-spacer /></v-col>
        <v-col
          v-for="item in links"
          :key="item.name"
          align="center"
          class="pa-0"
        >
          <v-card
            flat
            link
            :to="item.src"
            fluid
            :color="app_bar_color"
            style="height: 64px; width: 10rem"
          >
            <v-card-title style="display: inherit; font-size: medium">{{
              item.name
            }}</v-card-title></v-card
          >
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    links: {
      type: Array,
      default: () => ['test1', 'test2', 'test3'],
      required: false,
    },
  },
  data: () => ({
    app_bar_color: '#FAFAFA',
  }),
}
</script>

<style>
#title_logo {
  transform: scale(0.3);
}
</style>
