<template>
  <v-app>
    <v-app-bar id="title_bar" app>
      <NuxtLogo id="title_logo" />
      <v-toolbar-title id="title_string"
        >CO2 Zero Emission Center</v-toolbar-title
      >
      <v-row justify="end">
        <v-card v-for="item in links" :key="item" class="link_card">
          <NuxtLink to="/test"> {{ item }} </NuxtLink>
        </v-card>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    links: ['home', 'members', 'events', 'publish', 'contact'],
  }),
}
</script>

<style scoped>
.link_card {
  margin: 2rem;
}
#title_logo {
  transform: scale(0.3);
}
#title_string {
  margin-right: 2rem;
}
</style>
