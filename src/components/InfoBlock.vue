<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
});
</script>
<template>
  <div class="text-center w-72 mx-auto mt-23">
    <img height="80" width="80" :src="imageUrl" alt="" />
    <h2 class="mt-0/4 fs-20 fw-medium">{{ title }}</h2>
    <p class="tx-gray-500 mt-0/2">{{ description }}</p>
  </div>
</template>
