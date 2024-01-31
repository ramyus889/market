<script setup>
import { inject } from "vue";
import CartLtem from "./СartLtem.vue";

const { cart, removeFromCart } = inject("cart");
</script>
<template>
  <div class="d-flex flex-column flex-1 gap-1" v-auto-animate>
    <CartLtem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>
