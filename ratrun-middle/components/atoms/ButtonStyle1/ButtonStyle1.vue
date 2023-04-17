<template>
  <nuxt-link :to="to" class="link-button">{{ text }}</nuxt-link>
    <!-- <nuxt-link :to="to" class="link-button">< slot ></nuxt-link> 　長文テキストや、拡張性の高い時にslotをつかう-->

</template>

<script>
export default {
  props: {
    text: { type: String, default: "詳しく見る" },
    to: { type: String, default: "#" },
    color: { type: String, default: "#123567" },
    width: { type: String, default: "160px" },
    height: { type: String, default: "40px" },
    borderRadius: {type: String,default: '8px'},
  },
};
</script>

<style lang="scss" scoped>
.link-button {
  background: v-bind(color);
  color: white;
  border-radius: v-bind(borderRadius);
  width: v-bind(width);
  height: v-bind(height);
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  &:hover {
    opacity: 0.7;
  }
}
</style>