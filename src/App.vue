<script setup>
import { computed, provide, ref, watch } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";

const cart = ref([]);
const isCreatingOrder = ref(false);

const drawerOpen = ref(false);

const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price, 0)
);
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100));

const closeDrawer = () => {
  drawerOpen.value = false;
};
const openDrawer = () => {
  drawerOpen.value = true;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(
      `https://2fb4a0db868f6dac.mokky.dev/orders`,
      {
        items: cart.value,
        totalPrice: totalPrice.value,
      }
    );
    cart.value = [];
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    isCreatingOrder.value = false;
  }
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
});
</script>

<template>
  <Drawer
    v-if="drawerOpen"
    :total-price="totalPrice"
    :vatPrice="vatPrice"
    @create-order="createOrder"
    :is-creating-order="isCreatingOrder.value"
  />
  <div class="w-75 bgs-White rounded-30 shadow-50 mt-2 m-auto">
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />

    <div class="p-1">
      <router-view></router-view>
    </div>
  </div>
</template>
