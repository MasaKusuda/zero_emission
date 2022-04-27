<template>
  <v-app>
    <Header />
    <v-main>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
      test desu!
    </v-main>
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
  }),
}
</script>

<style scoped>
#title_logo {
  transform: scale(0.3);
}
#title_string {
  margin-right: 2rem;
}
</style>
