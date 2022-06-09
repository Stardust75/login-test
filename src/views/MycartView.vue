<template>
  <div class="about">
    <h1>My cart</h1>
    <h3 v-if="isEmpty">空空如也</h3>
    <ul v-if="!isEmpty">
      <li v-for="item in cart.items">
        <div>
          <h3>{{ item.name }} ¥ {{ item.price }}</h3>
          <el-input-number
            :modelValue="item.quantity"
            @update:modelValue="(quantity:number) => updateQuantity(item,quantity)"
          ></el-input-number>
          <el-button @click="removeFormCart(item)">remove</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "@/composables/useCart";

const { cart, updateQuantity, removeFormCart, isEmpty } = useCart();
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
