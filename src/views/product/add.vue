<template>
  <product-detail :is-update="false"></product-detail>
</template>

<script>
import ProductDetail from "@/views/product/productdetail";

export default {
  name: "add",
  components: {ProductDetail}
}
</script>

<style scoped>

</style>