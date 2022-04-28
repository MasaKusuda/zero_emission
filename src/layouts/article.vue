<template>
  <v-app>
    <Header :links="links" />
    <v-main>
      <v-divider></v-divider>
      <v-container fluid class="top-hero" style="height: 180px">
        <v-row
          class="light-blue lighten-4"
          style="height: 180px"
          justify="center"
          align-content="center"
        >
          <v-col>
            <div class="text-h3" style="text-align: center">{{ title.jp }}</div>
            <div class="text-b1" style="text-align: center">{{ title.en }}</div>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center" align-content="center">
        <v-col
          ><v-container class="my-10 px-16"> <nuxt /> </v-container
        ></v-col>
      </v-row>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
export default {
  name: 'ArticleLayout',
  props: {},
  data: () => ({
    title: {
      jp: 'ページの表題',
      en: 'title in english',
    },
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
  }),
}
</script>

<style lang="scss" scoped>
// .top-hero {
//   background-image: url('~/static/images/oilseed.jpg');
// }
</style>
