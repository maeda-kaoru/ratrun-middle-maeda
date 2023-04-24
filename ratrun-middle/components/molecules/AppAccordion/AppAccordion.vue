<template>
  <div>
    <div class="close" @click="clickAccordion">
      <h3 class="close-accordion">
        {{ title }}
      </h3>
      <p class="rihgt">＋</p>
    </div>
    <div class="open">
      <p class="open-accordion" v-if="isAccordion">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "製作時のポイント（アコーディオン）" },
    text: {
      type: String,
      default:
        "アコーディオン展開イメージ昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。",
    },
  },
  setup() {
    const clickAccordion = () => {
      isAccordion.value = !isAccordion.value;
    };
    const isAccordion = ref(false);

    return { clickAccordion, isAccordion };
  },
};
</script>

<style lang='scss' scoped>
.close {
  width: 100%;
  background-color: #666666;
  color: white;
  display: flex;
  align-items: center;
  &-accordion {
    margin: 0px;
    font-size: 34px;
    padding-left: 10px;
    @include tablet {
      font-size: 16px;
    }
  }
  .rihgt {
    margin: 0px 0px 0px auto;
    padding-right: 10px;
    font-size: 40px;
    font-weight: bold;
    @include tablet {
      font-size: 16px;
    }
  }
}
.open {
  width: 100%;
  height: auto;
  background-color: #cccccc;
  &-accordion {
    margin: 0px;
    line-height: 2em;
    padding: 20px;
  }
}
</style>