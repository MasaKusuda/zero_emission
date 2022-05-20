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
      <v-row justify="center" align-content="center">
        <v-col></v-col>
      </v-row>
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
                  <div class="text-h4" style="text-align: center">ニュース</div>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row no-gutters class="mb-6">
                <v-col md="2">
                  <p class="text-h6">2022/04/01</p>
                </v-col>
                <v-col>
                  <p class="text-h6">
                    ゼロCO2エミッション機能性材料開発研究センターが設立されました。
                    (<a
                      href="https://www.sanrenhonbu.tsukuba.ac.jp/wp/wp-content/uploads/2022/04/zeroco2.pdf"
                      >プレスリリース</a
                    >)
                  </p>
                </v-col>
                <v-container>
                  <p>
                    令和4年4月1日付けで、「ゼロCO2エミッション機能性材料開発研究センター」（センター長:近藤剛弘
                    筑波大学数理物質系
                    准教授）を設立します。本センターでは、水素の製造・貯蔵・輸送に関する基本的な重要技術と二酸化炭素をメタノールやギ酸などの化成品や燃料の原料となる有用な物質に転換するグリーンイノベーション基盤技術の研究開発を推進します。
                  </p>
                </v-container>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',

  data: () => ({
    items: [
      {
        src: './images/carousel/img1.jpg',
      },
      {
        src: './images/carousel/img2.jpg',
      },
      {
        src: './images/carousel/img3.jpg',
      },
      {
        src: './images/carousel/img4.jpg',
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
