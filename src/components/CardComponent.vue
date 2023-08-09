<script setup lang="ts">
import InfoLocation from './InfoLocation.vue';
import Status from './StatusComponent.vue';


</script>

<template>
  <div class="card">
    <div class="card__img">
      <img src="https://rickandmortyapi.com/api/character/avatar/141.jpeg" alt="">
    </div>
    <div class="card__info">
      <h1 class="card__name">Ghost in a Jar</h1>
      <Status status="Unknown" species="Alien"/>

      <div class="card__location">
        <InfoLocation title="Last known location: " location="Earth (Replacement Dimension)"/>
        <InfoLocation title="First seen in: " location="Total Rickall"/>
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
