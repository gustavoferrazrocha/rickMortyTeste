<script setup lang="ts">

const props = defineProps({
  title: String,
  location: String,
})



</script>

<template>
  <p className="text-zinc-400">{{title}}<br>
  <span className='text-xl text-white'>{{location}}</span>
  </p>
</template>
