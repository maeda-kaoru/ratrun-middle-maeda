<template>
  <div class="AppVision">
    <img src="../../../assets/img/phone.png" />
    <p>
      昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
    </p>
    <ButtonStyle1 text="詳しく見る" />
  </div>
</template>

<script>
import { ButtonStyle1 } from "../../atoms/ButtonStyle1";
export default {
  components: { ButtonStyle1 },
};
</script>

<style lang='scss' scoped>
.AppVision {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
}
p {
  margin: 30px 0 30px 0;
}
</style>