<template>
  <product-detail :is-update="true"></product-detail>
</template>

<script>
import ProductDetail from "@/views/product/productdetail";

export default {
  name: "update",
  components: {ProductDetail}
}
</script>

<style scoped>

</style>