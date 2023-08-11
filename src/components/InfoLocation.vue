<script setup lang="ts">
const props = defineProps({
  title: String,
  location: String
});
</script>

<template>
  <p className="text-zinc-400">
    {{ title }}<br />
    <span className="text-xl text-zinc-700">{{ location }}</span>
  </p>
</template>
