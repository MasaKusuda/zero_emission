<template>
  <v-app>
    <Header :links="links" />
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
    <Footer :links="links" />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  name: 'IndexPage',
  components: {
    Header,
  },
  data: () => ({
    items: [
      {
        src: '~/static/images/zerocon2.pdf',
      },
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
    links: [
      'ホーム',
      'コンセプト',
      'センター長より',
      '教員・研究員',
      '活動実績',
      '問い合わせ',
    ],
  }),
}
</script>

<style scoped></style>
