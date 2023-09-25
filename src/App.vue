<script setup lang="ts">
import BaseCol from '@/components/BaseCol.vue';
</script>

<template>
  <main class="main">
    <BaseCol />
    <BaseCol />
    <BaseCol />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}
</style>
