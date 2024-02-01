<script setup>
const emit = defineEmits(["onClickRemove"]);
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
});
</script>

<template>
  <div
    class="d-flex align-items-center border-gray-200-1 p-0/4 px-1 rounded-20 gap-0/8"
  >
    <img class="w-26 ps-0/6" :src="imageUrl" alt="" />

    <div class="d-flex flex-column">
      <p class="mt-1/7">{{ title }}</p>
      <div class="d-flex justify-content-between">
        <b class="-mt-0/6">{{ price }} руб.</b>
        <img
          @click="emit('onClickRemove')"
          class="-mt-0/6 opacity-40 opacityH-100 transition-3 cursor-pointer"
          src="/public/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
