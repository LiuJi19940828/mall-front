<template>
  <div class="menu_back">
    <slot></slot>
  </div>

</template>

<script>

export default {
  name: "menuback",
}
</script>

<style scoped>
.menu_back {
  height: 100%;
  background-color: #304156;
}
</style>