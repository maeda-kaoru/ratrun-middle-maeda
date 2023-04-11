<template>
  <footer>
    <div class="menu">
      <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
      <nuxt-link v-for="(link, key) in secondLinks" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
    </div>
    <button class="img-area" @click="clickMenu">
      <img src="../../../assets/img/hamburger.svg" />
    </button>
    <AppMobileMenu v-if="isMenu" />
  </footer>
</template>

<script>
import { AppMobileMenu } from "../../molecules/Menu";

export default {
  components: { AppMobileMenu },

  setup() {
    const clickMenu = () => {
      isMenu.value = !isMenu.value;
    };
    const isMenu = ref(false);
    const links = reactive([
      { text: "ホーム", to: "#" },
      { text: "私達について", to: "#" },
      { text: "選ばれる理由", to: "#" },
      { text: "ワークフロー", to: "#" },
      { text: "FAQ", to: "#" },
      { text: "事例紹介", to: "#" },
      { text: "会社概要", to: "#" },
      { text: "お問合わせ・お見積", to: "#" },
    ]);
    const secondLinks = reactive([{ text: "個人情報保護法について", to: "#" }]);
    return { links, clickMenu, isMenu, secondLinks };
  },
};
</script>

<style lang='scss' scoped>
.img-area {
  width: 100%;
  display: none;

  @include tablet {
    display: block;
  }
}
img {
  width: 15%;
  display: flex;
  margin-left: auto;
  margin-right: 20px;
}
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