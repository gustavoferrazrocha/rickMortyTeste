<script setup lang="ts">
const props = defineProps({
  status: String,
  species: String
});
</script>

<template>
  <div class="status">
    <div
      class="status__circle"
      :class="{ alive: status === 'Alive', dead: status === 'Dead' }"
    ></div>
    <span class="status__info">{{ status }} - {{ species }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.status {
  @apply flex items-center gap-2;
}
.status__circle {
  @apply w-2 h-2 bg-zinc-400 rounded-full;
}

.alive {
  @apply bg-green-500;
}

.dead {
  @apply bg-red-500;
}
</style>
