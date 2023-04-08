<template>
  <mobile-header>
    <div class="sp-menu">
      <div class="mobile-menu" style="border: solid">
        <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
          link.text
        }}</nuxt-link>
      </div>
    </div>
  </mobile-header>
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
  width: 380px;
  height: 72opx;
}
.mobile-menu{
  width: 80%;
  height: 80%;
  border: #000;
}
</style>