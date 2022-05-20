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
            <div class="text-h3" style="text-align: center">問い合わせ</div>
            <div class="text-b1" style="text-align: center">contact</div>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center" align-content="center">
        <v-col
          ><v-container class="my-10 px-16">
            <v-container fluid class="my-1">
              <v-row
                class="blue-grey lighten-5"
                style="height: 40px"
                justify="center"
                align-content="center"
              >
                <v-col>
                  <div class="text-h4" style="text-align: center">連絡先</div>
                </v-col>
              </v-row>
              <div class="text-h6 my-5" style="text-align: center">
                筑波大学数理物質系 准教授 近藤 剛弘（こんどう たかひろ）<br />
                TEL:029-853-5934 <br />
                E-mail: takahiro@ims.tsukuba.ac.jp
              </div>
            </v-container>
          </v-container></v-col
        >
      </v-row>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
export default {
  name: 'ContactPage',
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

<style scoped></style>
