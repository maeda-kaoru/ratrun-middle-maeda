<template>
  <header>
    <div class="haeder-title">
      <p>Philosophy 理念</p>
      <!-- <p>Philosophy</p>
      <p>理念</p> -->
    </div>
    <div class="header-main">
      <div class="header-img">
        <img src="~/assets/img/グループ 120.png">
        <img src="/Users/maedakaoru/Desktop/中級/ratrun-middle/assets/img/グループ 120.png">
      </div>
      <div class="menu">
        <a href="#">ホーム</a>
        <a href="#">私達について</a>
        <a href="#">選ばれる理由</a>
        <a href="#">ワークフロー</a>
        <a href="#">FAQ</a>
        <a href="#">事例紹介</a>
        <a href="#">会社概要</a>
        <a href="#">お問合せ・お見積</a>
      </div>
      <div class="header-right">
        <p class="header-right-title">理念の文章が入ります</p>
        <p>
          母体が内装解体専門会社であるからこそ、一般的な施工管理よりも解体費用を抑える抑えることができます。つまり、
          解体費用を抑えることで、余力のある資金が生まれ、使い道を広げることができるということです。
          <br />選択のできる予算の使途も合わせてご提案します。
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 0 0px;
  margin-bottom: 80px;
}

.haeder-title {
  font-family: DNPShueiShogoMinStd-Hv;
  padding: 30 0px;
  /* font-size: 84px; */
}
.header-main {
  width: 100%;
}
.header-img {
  background-image: url("~@/assets/img/グループ 120.png");
}
.menu a {
  padding: 20px;
}
.header-right {
  width: 50%;
  padding-right: 50px;
  margin-left: auto;
}
.header-right-title {
  font-size: 70px;
}

@media screen and (max-width: 1080px) {
  .header-right {
    width: 80%;
  }
}
</style>