<template>
  <header>
    <div id="header-backg">
      <div id="header-container">
        <h1 id="sitelogo">
          <a href="https://www.ccs.tsukuba.ac.jp/"
            ><img
              src="https://www.ccs.tsukuba.ac.jp/wp-content/themes/www.ccs.tsukuba.ac.jp/images/header_logo.png"
              alt="筑波大学 計算科学研究センター Center for Computational Sciences"
          /></a>
        </h1>
        <div id="header-tools">
          <ul id="header-navi">
            <li
              id="menu-item-193"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-193"
            >
              <a href="http://www.ccs.tsukuba.ac.jp/eng/">English</a>
            </li>
            <li
              id="menu-item-194"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-194"
            >
              <a href="https://www.ccs.tsukuba.ac.jp/pr/contact/"
                >お問い合わせ</a
              >
            </li>
            <li
              id="menu-item-3914"
              class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3914"
            >
              <a href="https://www.ccs.tsukuba.ac.jp/category/info/careers/"
                >教員等採用情報</a
              >
            </li>
            <li
              id="menu-item-195"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-195"
            >
              <a href="/feed/">RSS登録</a>
            </li>
            <li
              id="menu-item-196"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-196"
            >
              <a href="https://www.ccs.tsukuba.ac.jp/access/">交通アクセス</a>
            </li>
          </ul>
          <div id="header-row">
            <div id="header-search">
              <form
                id="searchform"
                class="searchform"
                action="https://www.ccs.tsukuba.ac.jp"
                method="get"
                role="search"
              >
                <input
                  id="search"
                  type="text"
                  name="s"
                  class="head-sitesearch"
                  value=""
                />
                <input type="submit" class="search-submit" value="Search" />
              </form>
            </div>
            <div id="mojisize">
              <ul class="textresizer">
                <li class="mojisize000">文字サイズ：</li>
                <li class="mojisize001">
                  <a href="javascript:void(0);" class="textresizer-active"
                    >標準</a
                  >
                </li>
                <li class="mojisize002">
                  <a href="javascript:void(0);">拡大</a>
                </li>
              </ul>
            </div>
            <!-- /.mojisize -->
          </div>
          <!-- /header-row -->
        </div>
        <!-- /.header-tools -->
      </div>
      <!-- /header-container -->
    </div>
    <!-- /.header-backg -->
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #44505e;
}
body {
  --wp--preset--color--black: #000000;
  --wp--preset--color--cyan-bluish-gray: #abb8c3;
  --wp--preset--color--white: #ffffff;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--color--vivid-red: #cf2e2e;
  --wp--preset--color--luminous-vivid-orange: #ff6900;
  --wp--preset--color--luminous-vivid-amber: #fcb900;
  --wp--preset--color--light-green-cyan: #7bdcb5;
  --wp--preset--color--vivid-green-cyan: #00d084;
  --wp--preset--color--pale-cyan-blue: #8ed1fc;
  --wp--preset--color--vivid-cyan-blue: #0693e3;
  --wp--preset--color--vivid-purple: #9b51e0;
  --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
    135deg,
    rgba(6, 147, 227, 1) 0%,
    rgb(155, 81, 224) 100%
  );
  --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
    135deg,
    rgb(122, 220, 180) 0%,
    rgb(0, 208, 130) 100%
  );
  --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
    135deg,
    rgba(252, 185, 0, 1) 0%,
    rgba(255, 105, 0, 1) 100%
  );
  --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
    135deg,
    rgba(255, 105, 0, 1) 0%,
    rgb(207, 46, 46) 100%
  );
  --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
    135deg,
    rgb(238, 238, 238) 0%,
    rgb(169, 184, 195) 100%
  );
  --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
    135deg,
    rgb(74, 234, 220) 0%,
    rgb(151, 120, 209) 20%,
    rgb(207, 42, 186) 40%,
    rgb(238, 44, 130) 60%,
    rgb(251, 105, 98) 80%,
    rgb(254, 248, 76) 100%
  );
  --wp--preset--gradient--blush-light-purple: linear-gradient(
    135deg,
    rgb(255, 206, 236) 0%,
    rgb(152, 150, 240) 100%
  );
  --wp--preset--gradient--blush-bordeaux: linear-gradient(
    135deg,
    rgb(254, 205, 165) 0%,
    rgb(254, 45, 45) 50%,
    rgb(107, 0, 62) 100%
  );
  --wp--preset--gradient--luminous-dusk: linear-gradient(
    135deg,
    rgb(255, 203, 112) 0%,
    rgb(199, 81, 192) 50%,
    rgb(65, 88, 208) 100%
  );
  --wp--preset--gradient--pale-ocean: linear-gradient(
    135deg,
    rgb(255, 245, 203) 0%,
    rgb(182, 227, 212) 50%,
    rgb(51, 167, 181) 100%
  );
  --wp--preset--gradient--electric-grass: linear-gradient(
    135deg,
    rgb(202, 248, 128) 0%,
    rgb(113, 206, 126) 100%
  );
  --wp--preset--gradient--midnight: linear-gradient(
    135deg,
    rgb(2, 3, 129) 0%,
    rgb(40, 116, 252) 100%
  );
  --wp--preset--duotone--dark-grayscale: url(#wp-duotone-dark-grayscale);
  --wp--preset--duotone--grayscale: url(#wp-duotone-grayscale);
  --wp--preset--duotone--purple-yellow: url(#wp-duotone-purple-yellow);
  --wp--preset--duotone--blue-red: url(#wp-duotone-blue-red);
  --wp--preset--duotone--midnight: url(#wp-duotone-midnight);
  --wp--preset--duotone--magenta-yellow: url(#wp-duotone-magenta-yellow);
  --wp--preset--duotone--purple-green: url(#wp-duotone-purple-green);
  --wp--preset--duotone--blue-orange: url(#wp-duotone-blue-orange);
  --wp--preset--font-size--small: 13px;
  --wp--preset--font-size--medium: 20px;
  --wp--preset--font-size--large: 36px;
  --wp--preset--font-size--x-large: 42px;
}
</style>
