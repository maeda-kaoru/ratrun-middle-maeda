<template>
  <div class="mission">
    <div class="mission-title">
      <p class="number">{{ number }}</p>
      <p class="title">{{ title }}</p>
    </div>
    <div class="text-area">
      <img src="../../../assets/img/calendar.png" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: { type: String },
    title: { type: String, default: "技術確認" },
    text: {
      type: String,
      default:
        "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。",
    },
    color: { type: String, default: "#756d6d" },
    width: { type: String, default: "40px" },
    height: { type: String, default: "40px" },
    borderRadius: { type: String, default: "50%" },
  },
};
</script>

<style lang='scss' scoped>
.mission {
      line-height: 2em;
  .mission-title {
    width: 100%;
    height: auto;
    display: flex;
    .number {
      width: v-bind(width);
      height: v-bind(height);
      background: v-bind(color);
      border-radius: v-bind(borderRadius);
      color: white;
      font-size: 22px;
      padding-top: 2px;
      box-sizing: border-box;
      text-align: center;
    }
    .title {
      font-size: 22px;
      padding-top: 2px;
    }
  }
  .text-area {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>