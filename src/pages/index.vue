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
        <v-col
          ><v-container class="my-10 px-16">
            <v-row justify="center" align-content="center">
              <v-col>
                <div class="text-h4" style="text-align: center">
                  ゼロCO2エミッション機能性材料開発研究センター
                </div>
                <p>
                  現在、地球温暖化に伴い、温室効果ガスである二酸化炭素を排出しない脱炭素（カーボンニュートラル）が地球規模で求められています。水素は水から製造可能であり、水素を用いた燃料電池は、発電の際の化学反応において二酸化炭素を排出せずに水のみを生成物として産生するため、再生可能エネルギーの中心的なエネルギーキャリアとして注目されています。この様に、水素は、持続可能なゼロカーボン社会を担う重要な分子です。本センターでは、水素の製造・貯蔵・輸送に関する基本的な重要技術と二酸化炭素をメタノールやギ酸などの化成品や燃料の原料となる有用な物質に転換するグリーンイノベーション基盤技術の開発研究を推進します。
                </p>
                <div style="text-align: center">
                  <img src="~/static/images/fig1.png" />
                </div>
              </v-col>
            </v-row> </v-container
        ></v-col>
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
