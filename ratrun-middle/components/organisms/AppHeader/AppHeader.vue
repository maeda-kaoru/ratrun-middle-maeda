<template>
  <header>
    <div class="menu">
      <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
    </div>
    <AppMobilemenu />
  </header>
</template>

<script>
import { AppMobileMenu } from "../../molecules/Menu";

export default {
  components: { AppMobileMenu },

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
header {
  padding: 0 0px;
  height: 80px;
}
.menu {
  display: flex;
  gap: 40px;
  margin-left: 40px;
  align-items: center;
  height: 100%;
  @include tablet {
    display: none;
  }
}

.menu a {
  text-decoration: none;
  color: #000;
}
.header-right {
  width: 50%;
  padding-right: 50px;
  margin-left: auto;
}
.header-right-title {
  font-size: 70px;
}
@include tablet {
  .sp-menu {
    position: fixed;
    width: 100%;
    height: 730px;
  }
  .sp-menu a {
    text-decoration: none;
    color: #000;
  }
  .mobile-menu {
    width: 80%;
    height: 650px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 50px;
    padding-top: 50px;
  }
}
</style>