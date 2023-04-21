<template>
  <nuxt-link :to="to" class="link-button">{{ text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "詳しく見る" },
    to: { type: String, default: "#" },
    color: { type: String, default: "#123567" },
    width: { type: String, default: "160px" },
    height: { type: String, default: "40px" },
    borderRadius: { type: String, default: "8px" },
    fontsize: { type: String, default: "16px" },
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
  text-decoration: none;
  font-size: v-bind(fontsize);

  &:hover {
    opacity: 0.7;
  }
}
</style>