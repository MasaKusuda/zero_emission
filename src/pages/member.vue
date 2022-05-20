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
          ><v-container class="my-10 px-16">
            <GrayBar title_string="センター長" />
            <v-row class="my-2">
              <v-card flat max-width="200" class="mx-auto my-2 rounded-0">
                <img width="200" src="~/static/images/igarashi.jpg" />
                <v-card-text class="black--text text-h6 text-center"
                  >准教授<br />五十嵐康彦</v-card-text
                >
              </v-card></v-row
            >
            <GrayBar title_string="メンバー" />
            <v-row class="my-2">
              <v-card flat max-width="200" class="mx-auto my-2 rounded-0">
                <img width="200" src="~/static/images/igarashi.jpg" />
                <v-card-text class="black--text text-h6 text-center"
                  >准教授<br />五十嵐康彦</v-card-text
                >
              </v-card>
              <v-card flat max-width="200" class="mx-auto my-2 rounded-0">
                <img width="200" src="~/static/images/igarashi.jpg" />
                <v-card-text class="black--text text-h6 text-center"
                  >准教授<br />五十嵐康彦</v-card-text
                >
              </v-card>
            </v-row>
            <GrayBar title_string="アドバイザー" />
            <v-row class="my-2">
              <v-card flat max-width="200" class="mx-auto my-2 rounded-0">
                <img width="200" src="~/static/images/igarashi.jpg" />
                <v-card-text class="black--text text-h6 text-center"
                  >准教授<br />五十嵐康彦</v-card-text
                >
              </v-card>
              <v-card flat max-width="200" class="mx-auto my-2 rounded-0">
                <img width="200" src="~/static/images/igarashi.jpg" />
                <v-card-text class="black--text text-h6 text-center"
                  >准教授<br />五十嵐康彦</v-card-text
                >
              </v-card>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
import GrayBar from '../components/GrayBar.vue'
export default {
  name: 'ArticleLayout',
  components: { GrayBar },
  props: {},
  data: () => ({
    title: {
      jp: 'メンバー・教職員',
      en: 'members',
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
.profile_img {
  width: 400px;
}
</style>
