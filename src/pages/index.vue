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
          <v-row class="fill-height" align="center" justify="center">
            <div :class="css_in_slide[i]">{{ texts_in_slide[0] }}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
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
      {
        name: 'ホーム',
        src: '/',
      },
      {
        name: 'コンセプト',
        src: '/concept',
      },
      {
        name: 'センター長より',
        src: '/message',
      },
      {
        name: '教員・研究員',
        src: '/member',
      },
      {
        name: '活動実績',
        src: '/performance',
      },
      {
        name: '問い合わせ',
        src: '/contact',
      },
    ],
    texts_in_slide: ['カーボンニュートラル及び水素社会の実現を目指して'],
    css_in_slide: [
      'text-h3 white--text',
      'text-h3 white--text',
      'text-h3 white--text',
      'text-h3 white--text',
    ],
  }),
}
</script>

<style scoped></style>
