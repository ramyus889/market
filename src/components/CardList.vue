<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
  isFavorites: Boolean,
});

const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>
<template>
  <div class="d-grid grid-col-4 grid3 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      :is-favorite="item.isFavorite"
      :is-added="item.isAdded"
    />
  </div>
</template>
<style>
@media screen and (max-width: 2190px) {
  .grid3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1850px) {
  .grid3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
