<template>
  <div class="about">
    <h1>This is products</h1>
    <ul>
      <li v-for="product in products">
        <div>
          <h3>
            <span>{{ product.name }}</span>
            <span>¥{{ product.price }}</span>
          </h3>
          <el-button @click="addToCart(product)">add</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCart } from "@/composables/useCart";

const { addToCart } = useCart();
const products = ref<Products[]>([]);
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: "商品1",
      price: 10,
    },
    {
      id: 2,
      name: "商品2",
      price: 20,
    },
    {
      id: 3,
      name: "商品3",
      price: 30,
    },
  ];
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
