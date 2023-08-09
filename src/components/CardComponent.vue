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
  @apply flex h-56 bg-zinc-700 rounded-lg overflow-hidden text-white w-[550px] gap-3;
}

.card__info {
  @apply flex flex-col justify-around;
}

.card__name {
  @apply text-3xl;
}

.card__location {
  @apply flex flex-col gap-2;
}

img {
  @apply h-full;
}
</style>
