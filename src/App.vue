<script setup lang="ts">
import BaseCol from '@/components/BaseCol.vue';
import showNotify from '@/utils/notify';

const notify = () => {
  showNotify('Color copied to the clipboard!');
};
</script>

<template>
  <main class="h-screen grid grid-cols-none grid-rows-3 md:grid-cols-3 md:grid-rows-none">
    <BaseCol index="1" @toast="notify" />
    <BaseCol index="2" @toast="notify" />
    <BaseCol index="3" @toast="notify" />
  </main>
</template>

<style scoped></style>
