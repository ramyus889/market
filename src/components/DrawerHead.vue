<script setup>
import { inject } from "vue";

const closeDrawer = inject("cart").closeDrawer;
</script>

<template>
  <div class="d-flex align-items-center gap-1/5 mb-1 fw-bold">
    <div class="-transformH-translateX-4 transition-3">
      <svg
        @click="closeDrawer"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        class="opacity-30 cursor-pointer mt--3 transform-rotate-180 opacityH-100 transition-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <h2 class="fs-30 fw-bold mt-0/4">Корзина</h2>
  </div>
</template>
