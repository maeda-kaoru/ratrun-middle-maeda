<template>
  <div class="sp-menu">
    <div class="mobile-menu" style="border: solid">
      <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
      <div class="icon">
        <img src="../../../assets/img/icon-facebook.svg" />
        <img src="../../../assets/img/icon-instagram.svg" />
        <img src="../../../assets/img/icon-pintarest.svg" />
      </div>
    </div>
  </div>
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
      { text: "会社概要", to: "#" },
      { text: "お問合わせ・お見積", to: "#" },
      { text: "個人情報保護法について", to: "#" },
    ]);
    return { links };
  },
};
</script>

<style lang='scss' scoped>
.sp-menu {
  position: fixed;
  width: 100%;
  height: 730px;
  background: white;
}
.sp-menu a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}
.mobile-menu {
  width: 80%;
  height: 650px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  padding-left: 20px;
}
.icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 70px;
  padding: 20px;
}
</style>