<script setup lang="ts">
import BaseCol from '@/components/BaseCol.vue';
import showNotify from '@/utils/notify';

const notify = () => {
  showNotify('Color copied to the clipboard!');
};
</script>

<template>
  <main class="h-screen grid grid-cols-none grid-rows-3 md:grid-cols-3 md:grid-rows-none">
    <BaseCol @toast="notify" />
    <BaseCol @toast="notify" />
    <BaseCol @toast="notify" />
  </main>
</template>

<style scoped></style>
