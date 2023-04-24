<template>
  <div class="AppVision">
    <img src="../../../assets/img/phone.png" />
    <p>{{ text }}</p>
    <ButtonStyle1 text="詳しく見る" />
  </div>
</template>

<script>
import { ButtonStyle1 } from "../../atoms/ButtonStyle1";
export default {
  components: { ButtonStyle1 },

  props: {
    text: {
      type: String,
      default:
        "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。",
    },
  },
};
</script>

<style lang='scss' scoped>
.AppVision {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
}
p {
padding: 50px 0 50px 0;
  line-height: 2em;
}
</style>