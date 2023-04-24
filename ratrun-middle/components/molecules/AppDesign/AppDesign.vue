<template>
  <div class="design">
    <img src="../../../assets/img/phone.png" />
    <div class="design-title">
      <p>{{ title }}</p>
    </div>
    <div class="text-area">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "情報技術" },
    text: {
      type: String,
      default:
        "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。",
    },
  },
};
</script>

<style lang='scss' scoped>
.design {
  width: 100%;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8d8d8;
  img {
    width: 100%;
    height: auto;
  }
  &-title {
    width: 100%;
    height: auto;
    font-size: 30px;
    text-align: center;
  }
  .text-area {
    width: 80%;
  }
}
</style>