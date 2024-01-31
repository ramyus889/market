<script setup>
import { computed } from "vue";
import CartListItem from "./CartListItem.vue";
import DrawerHead from "./DrawerHead.vue";
import InfoBlock from "./InfoBlock.vue";

const emit = defineEmits(["createOrder"]);

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
  isCreatingOrder: Boolean,
});

const buttonDisabled = computed(() =>
  props.isCreatingOrder ? true : props.totalPrice ? false : true
);
</script>

<template>
  <div class="fixed top-0 start-0 h-100 w-100 bg-black z-10 opacity-70"></div>
  <div class="bgs-White w-14 h-100 fixed end-0 top-0 z-20 p-1">
    <DrawerHead />

    <InfoBlock
      v-if="!totalPrice"
      title="Корзина пустая"
      description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
      imageUrl="/package-icon.png"
    />

    <CartListItem v-if="totalPrice" />

    <div v-if="totalPrice" class="p-1 d-flex flex-column gap-1 mb-0/5">
      <div class="d-flex">
        <span>Итого: </span>
        <div class="flex-1"></div>
        <b>{{ totalPrice }} P.</b>
      </div>
      <div class="d-flex">
        <span>Налог 5%: </span>
        <div class="flex-1"></div>
        <b>{{ vatPrice }} P.</b>
      </div>

      <button
        :disabled="buttonDisabled"
        @click="() => emit('createOrder')"
        class="bgs-green-300 bgs-green-400H transition-3 w-100 rounded-20 mt-0/4 py-0/9 tx-White"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
