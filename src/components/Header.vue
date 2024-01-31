<script setup>
const emit = defineEmits(["openDrawer"]);

defineProps({
  totalPrice: Number,
});
</script>

<template>
  <header class="d-flex justify-content-between border-bottom-gray-300-3 px-2">
    <router-link class="text-black text-decoration-none" to="/">
      <div class="d-flex align-items-center gap-1 py-1/4">
        <img src="/logo.png" alt="Logo" class="w-20 -mt-1/1" />
        <div>
          <h2 class="fw-bold fs-20 text-uppercase mt-0/6">Vue Sneakers</h2>
          <p class="tx-gray-500 -mt-0/4">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="d-flex align-items-center gap-1">
      <li
        @click="() => emit('openDrawer')"
        class="d-flex align-items-center cursor-pointer pe-8 tx-gray-600 gap-0/5 text-blackH transition-5"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>

      <router-link class="text-black text-decoration-none" to="/favorites">
        <li
          class="d-flex align-items-center cursor-pointer pe-8 tx-gray-600 gap-0/5 text-blackH transition-5"
        >
          <img src="/heart.svg" alt="heart" />
          <span>Закладки</span>
        </li>
      </router-link>

      <li
        class="d-flex align-items-center cursor-pointer tx-gray-600 gap-0/5 text-blackH transition-5"
      >
        <img src="/profile.svg" alt="profile" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
