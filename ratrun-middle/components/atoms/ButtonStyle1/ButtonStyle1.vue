<template>
  <a class="ButtonStyle1" :type="type">
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
.ButtonStyle1 {
  &._normal {
    background-color: #40407f;
    border-radius: 0.5em;
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
    padding: 1em 3em;
    color: #ffffff;
    text-decoration: none;
  }
  &._no-horn {
    border-radius: 0em;
    font-size: 24px;
    padding: 0.3em 1em;
    width: 10%;
    text-align: center;
    @include tablet {
      width: 20%;
      font-size: 12px;
    }
  }
  &._font{
font-size: 22px;
margin: 20px 0 20px 0;
  }
}
.ButtonStyle1:hover {
  opacity: 0.7;
}
</style>