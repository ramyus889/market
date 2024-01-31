<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import CardList from "../components/CardList.vue";
const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://2fb4a0db868f6dac.mokky.dev/favorites?_relations=items"
    );

    favorites.value = data.map((obj) => obj.item);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <h2 class="fs-30 fw-bold ps-3 pt-1">Мои Закладки</h2>
  <CardList :items="favorites" is-favorites />
</template>
