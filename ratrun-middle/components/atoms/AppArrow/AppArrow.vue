<template>
  <a class="AppArrow" :type="type">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang='scss' scoped>
.AppArrow {
    background-color: #999999;
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
    padding: 0.2em 0.4em;
    color: #ffffff;
    font-size: 38px;
    @include tablet {
font-size: 18px;
}
}
.AppArrow:hover {
  opacity: 0.7;
}
</style>