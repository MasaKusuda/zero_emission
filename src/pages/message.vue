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
            <div class="text-h3" style="text-align: center">センター長より</div>
            <div class="text-b1" style="text-align: center">message</div>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center" align-content="center">
        <v-col
          ><v-container class="my-10 px-16">
            <v-container class="my-10 px-16">
              <v-row justify="center" align-content="center">
                <v-col>
                  <div class="text-h4" style="text-align: center">
                    ゼロCO<sub>2</sub> エミッション機能性材料開発研究センター
                  </div>
                  <p>
                    現在、地球温暖化に伴い、温室効果ガスである二酸化炭素を排出しない脱炭素（カーボンニュートラル）が地球規模で求められています。水素は水から製造可能であり、水素を用いた燃料電池は、発電の際の化学反応において二酸化炭素を排出せずに水のみを生成物として産生するため、再生可能エネルギーの中心的なエネルギーキャリアとして注目されています。この様に、水素は、持続可能なゼロカーボン社会を担う重要な分子です。本センターでは、水素の製造・貯蔵・輸送に関する基本的な重要技術と二酸化炭素をメタノールやギ酸などの化成品や燃料の原料となる有用な物質に転換するグリーンイノベーション基盤技術の開発研究を推進します。
                  </p>
                  <div style="text-align: center">
                    <img src="~/static/images/fig1.png" />
                  </div>
                </v-col>
              </v-row>
            </v-container> </v-container
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
