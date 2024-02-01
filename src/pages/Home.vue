<script setup>
import { reactive, watch, ref, onMounted } from "vue";
import axios from "axios";
import { inject } from "vue";
import CardList from "../components/CardList.vue";

const { cart, addToCart, removeFromCart } = inject("cart");

const items = ref([]);

const filters = reactive({
  sortBy: "",
  searchQuery: "",
});

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value;
};

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      };
      item.isFavorite = true;
      const { data } = await axios.post(
        `https://2fb4a0db868f6dac.mokky.dev/favorites`,
        obj
      );
      item.favoriteId = data.id;
    } else {
      await axios.delete(
        `https://2fb4a0db868f6dac.mokky.dev/favorites/${item.favoriteId}`
      );
      (item.isFavorite = false), (item.favoriteId = null);
    }
  } catch (err) {
    console.log(err);
  }
};
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      `https://2fb4a0db868f6dac.mokky.dev/favorites`
    );
    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.item_id === item.id
      );

      if (!favorite) {
        return item;
      }
      return { ...item, isFavorite: true, favoriteId: favorite.id };
    });
  } catch (err) {
    console.log(err);
  }
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(
      `https://2fb4a0db868f6dac.mokky.dev/items`,
      {
        params,
      }
    );
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }));
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  const localCart = localStorage.getItem("cart");
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }));
});

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});

watch(filters, fetchItems);
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <h2 class="fs-30 fw-bold ps-3 pt-1">Все кроссовки</h2>
    <div class="d-flex gap-0/6">
      <select
        @change="onChangeSelect"
        class="outline-none cursor-pointer py-0/6 px-0/3 rounded-10"
      >
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
      <div class="relative">
        <img
          class="absolute left-0 mt-0/9 ms-0/9"
          src="/public/search.svg"
          alt=""
        />
        <input
          @input="onChangeSearchInput"
          class="border-1 rounded-10 py-0/6 ps-2/5 pe-0/4 outline-none me-1"
          placeholder="Поиск..."
          type="text"
        />
      </div>
    </div>
  </div>
  <CardList
    :items="items"
    @add-to-favorite="addToFavorite"
    @add-to-cart="onClickAddPlus"
  />
</template>
