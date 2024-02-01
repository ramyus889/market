<script setup>
const props = defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});

const visibleFavoriteButton = Boolean(props.onClickAdd);
</script>
<template>
  <div
    class="relative m-2 border-gray-200-1 rounded-24 w-80 p-2/2 cursor-pointer transition-3 -transformH-translateY-10 shadowH-10"
  >
    <img
      v-if="visibleFavoriteButton"
      :src="!isFavorite ? '/public/like-1.svg' : '/public/like-2.svg'"
      alt="like1"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    />

    <img :src="imageUrl" alt="" />
    <p class="mt-1">{{ title }}</p>
    <div class="d-flex justify-content-between mt-1">
      <div class="d-flex flex-column">
        <span class="tx-gray-600">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>
      <img
        v-if="visibleFavoriteButton"
        class=""
        @click="onClickAdd"
        :src="!isAdded ? '/public/plus.svg' : '/public/checked.svg'"
        alt=""
      />
    </div>
  </div>
</template>
