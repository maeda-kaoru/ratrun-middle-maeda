<template>
  <div class="mission">
    <p class="AppNumber">
      <slot />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
// .mission {
// width: 40px;
// height: 40px;
// }
.AppNumber {
  width: 40px;
  height: 40px;
  background: #756d6d;
  border-radius: 50%;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p{
    margin: 0px;
}
</style>