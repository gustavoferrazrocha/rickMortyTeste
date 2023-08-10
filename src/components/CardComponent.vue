<script setup lang="ts">
import InfoLocation from './InfoLocation.vue';
import Status from './StatusComponent.vue';

const props = defineProps({
  status: String,
  species: String,
  location: String,
  name: String,
  image: String,
  origin: String,
})


</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="image" alt="">
    </div>
    <div class="card__info">
      <h1 class="card__name">{{ name }}</h1>
      <Status :status="status" :species="species"/>

      <div class="card__location">
        <InfoLocation title="Last known location:" :location="location"/>
        <InfoLocation title="First seen in:" :location="origin"/>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

.card {
  @apply flex h-56 shadow-xl bg-white rounded-lg overflow-hidden text-black w-[550px] gap-3;
  @apply sm:flex sm:flex-col sm:w-80 hover:scale-105 sm:h-full cursor-pointer;

}

.card__info {
  @apply flex flex-col justify-around;
  @apply sm:flex sm:items-center sm:flex-col sm:p-4;
}

.card__name {
  @apply text-3xl;
}

.card__location {
  @apply flex flex-col gap-2;
  @apply sm:flex sm:gap-5 sm:mt-8
}

img {
  @apply h-full w-full;
}
</style>
