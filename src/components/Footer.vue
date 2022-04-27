<template>
  <div>
    <v-footer app>
      <v-row justify="center" align-content="center">
        <v-col v-for="i in 3" :key="i"><v-spacer></v-spacer></v-col>
        <v-col v-for="link in links" :key="link" align="center">
          <v-btn :to="link" nuxt plain class="ma-1" style="font-size: 0.8rem">{{
            link
          }}</v-btn>
        </v-col>
        <v-col v-for="i in 3" :key="i"><v-spacer></v-spacer></v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    links: {
      type: Array,
      default: () => ['test1', 'test2', 'test3'],
      required: false,
    },
  },
  data: () => ({}),
}
</script>
