<template>
  <header>
    <div class="menu">
      <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
    </div>
    <div class="sp-menu"></div>
  </header>
</template>

<script>
export default {
  setup() {
    const links = reactive([
      { text: "ホーム", to: "#" },
      { text: "私達について", to: "#" },
      { text: "ホーム", to: "#" },
      { text: "ホーム", to: "#" },
      { text: "ホーム", to: "#" },
    ]);
    return { links };
  },
};
</script>

<style scoped>
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

.sp-menu {
  position: fixed;
}
</style>