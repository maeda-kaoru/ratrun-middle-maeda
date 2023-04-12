<template>
  <footer>
    <div class="footer-area">
      <div class="logo">
        <img src="../../../assets/img/logo.svg" />
        <img src="../../../assets/img/logo-text.svg" />
      </div>
      <div class="menu">
        <div class="menu-left">
          <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
            link.text
          }}</nuxt-link>
        </div>
        <div class="menu-right">
          <nuxt-link
            v-for="(link, key) in secondlinks"
            :key="key"
            :to="link.to"
            >{{ link.text }}</nuxt-link
          >
        </div>
      </div>
      <div class="footer-right">
        <div class="address">
          <p>
            建築・建築デザイン・原状回復・内装解体・建物解体・アスベスト除去工事はウラシコにお任せください！
          </p>
          <p>
            <b>株式会社ウラシコ<br class="sp-br" />CYPHER （サイファー）</b>
            <!-- <div class="space"></div> -->
            <br />〒454-0982
            <br />愛知県名古屋市中川区西伏屋2丁目617番地
            <!-- <div class="space"></div> -->
            <br />TEL: 052-655-4146
          </p>
        </div>
        <div class="icon">
          <img src="../../../assets/img/icon-facebook.svg" />
          <img src="../../../assets/img/icon-instagram.svg" />
          <img src="../../../assets/img/icon-pintarest.svg" />
        </div>
      </div>
    </div>
    <div class="Copyright">
      <p>Copyright(c) 店舗設計・デザイン・施工 CYPHER. AllRights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const links = reactive([
      { text: "ホーム", to: "#" },
      { text: "私達について", to: "#" },
      { text: "選ばれる理由", to: "#" },
      { text: "ワークフロー", to: "#" },
      { text: "FAQ", to: "#" },
      { text: "事例紹介", to: "#" },
    ]);
    const secondlinks = reactive([
      { text: "会社概要", to: "#" },
      { text: "お問合わせ・お見積", to: "#" },
      { text: "個人情報保護法について", to: "#" },
    ]);
    return { links, secondlinks };
  },
};
</script>

<style lang='scss' scoped>
footer {
  padding: 0 0px;
}
.footer-area {
  color: white;
  width: 100%;
  height: 450px;
  background-color: #756d6d;
  display: flex;
  padding-top: 80px;
  @include tablet {
    height: 1200px;
    flex-direction: column;
    padding: 0px;
  }
}
.logo {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @include tablet {
    width: 100%;
    height: 250px;
    gap: 20px;
    padding: 30px 0px 30px 0px;
  }
  img {
    width: 230px;
    @include tablet {
      width: 180px;
    }
  }
}
.menu {
  width: 33%;
  height: 150px;
  display: flex;
  @include tablet {
    width: 100%;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: white;
  }
}

.menu-left {
  width: 700px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @include tablet {
    width: 60%;
    height: 240px;
  }
}
.menu-right {
  width: 1000px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @include tablet {
    width: 60%;
    height: 150px;
  }
}
.footer-right {
  width: 33%;
  display: flex;
  flex-direction: column;
  @include tablet {
    width: 100%;
    height: 400px;
    flex-direction: none;
    align-items: center;
    justify-content: center;
  }
}
.address {
  width: 400px;
  height: 270px;
  padding: 10px;
  border: 1px solid;
  outline: 1px solid;
  outline-offset: 5px;
  margin: 20px;

  @include tablet {
    width: 80%;
    height: 350px;
    padding: 20px;
    outline: none;
    outline-offset: none;
    margin: 0px;
  }
  p {
    line-height: 2em;
  }
}
.sp-br {
  display: none;
  @include tablet {
    display: block;
  }
}

.space {
  display: none;
  @include tablet {
    display: block;
  }
}

.icon {
  width: 450px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  @include tablet {
    display: none;
  }
  img {
    width: 40px;
  }
}

.img-area {
  width: 100%;
  @include tablet {
    display: none;
  }
}

.Copyright {
  width: 100%;
  height: 80px;
  font-family: 小塚ゴシック Pr6N;
  display: flex;
  justify-content: center;
  align-items: center;
  @include tablet{
    // padding: 20px;
    height: 150px;
  }

}

</style>