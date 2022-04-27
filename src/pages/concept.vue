<template>
  <div>
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
            <div class="text-h3" style="text-align: center">コンセプト</div>
            <div class="text-b1" style="text-align: center">concept</div>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="my-10">
        <div>
          ゼロカーボン社会の実現に向けた再生可能エネルギーの探究
          「ゼロCO2エミッション機能性材料開発研究センター」の設置
        </div>
        <p>
          国立大学法人筑波大学（学長：永田恭介、以下「筑波大学」）は、令和４年４月１日に
          「ゼロCO2エミッション機能性材料開発研究センター」（以下、「センター」）を国際産学連携
          本部に設置します。
          本センターでは、水素の製造・貯蔵・輸送に関する基本的な重要技術と二酸化炭素をメ
          タノールやギ酸などの化成品や燃料の原料となる有用な物質に転換するグリーンイノ
          ベーション基盤技術の研究開発を推進します。
        </p>
        <div>設置の背景</div>
        <p>
          地球温暖化に伴い、温室効果ガスである二酸化炭素を排出しない脱炭素（カーボンニュートラ
          ル）が地球規模で求められている。水素は水から製造可能であり、水素を用いた燃料電池は、発
          電の際の化学反応において二酸化炭素を排出せずに水のみを生成物として産生するため、再生
          可能エネルギーの中心的なエネルギーキャリアとして注目されており、持続可能なゼロカーボン
          社会を担う重要な分子である。
          一方、二酸化炭素は自然界において極めて安定な物質であり、また、地球温暖化の主たる原因
          物質といわれている。
          この事象に対し、世界の産学官連携のもとでCO2の有効な利用手段となるカーボンリサイクル技
          術の開発がもとめられており、地球規模課題の解決にむけたイノベーションが活発となっている。
        </p>
        <div>センターの概要</div>
        <p>
          本学のオリジナリティの高い、グリーンイノベーションの基礎科学研究成果を包括的に社会に発
          信することにより、個別に推進してきた産学連携の取り組みからのゲームチェンジを起こし、グリー
          ンイノベーションを重視する企業との新たな「組織」対「組織」の大型産学共同研究の促進に取り
          組む。また物質・材料研究機構や産業技術総合研究所などのつくば地区の国立研究開発組織と
          の協働・共創の場を提供することで、産学のみならず官学の連携の促進に取り組む。
          物質科学の観点で積極的に二酸化炭素を削減する技術や、二酸化炭素を排出せずに低コスト
          で水素を安全に製造・貯蔵・輸送する技術を開発し、水素を再生可能エネルギーキャリアとして確
          立することにより、ゼロカーボン社会の実現に貢献するとともに、SDGsの実現に貢献する。
        </p>
        <div>センターの活動方針について</div>
        <p>
          貴金属を用いずに低コストで水素を製造する技術の開発研究や安価で安全に大量の水素を貯
          蔵・輸送する技術の開発、また二酸化炭素を有用な物質に転換する技術の開発研究など、グリー
          ンイノベーション基盤技術のさらなる推進のほか、酵素や微生物の生体触媒機能を活用したエネ
          ルギー変換技術の開発研究を行う。
        </p>
      </v-container>
    </v-main>
    <Footer :links="links" />
  </div>
</template>

<script>
export default {
  name: 'ConceptPage',
  data: () => ({
    links: [
      'ホーム',
      'コンセプト',
      'センター長より',
      '教員・研究員',
      '活動実績',
      '問い合わせ',
    ],
    article:
      'asdgna;kajsdbnv;abrgea;ba;kjbndva;bro;iegdvikjbnfan;adasdgna;kajsdbnv;abrgea;ba;kjbndva;bro;iegdvikjbnfan;adasdgna;kajsdbnv;abrgea;ba;kjbndva;bro;iegdvikjbnfan;adasdgna;kajsdbnv;abrgea;ba;kjbndva;bro;iegdvikjbnfan;ad',
  }),
}
</script>

<style lang="scss" scoped>
// .top-hero {
//   background-image: url('~/static/images/oilseed.jpg');
// }
</style>
