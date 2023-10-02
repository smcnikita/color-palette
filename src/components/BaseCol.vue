<template>
  <div class="col">
    <button
      type="button"
      class="ml-3 mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      data-tooltip-target="tooltip-default"
      @click="onClick"
    >
      {{ color }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateColor } from '@/utils/color';
import { copyToClipboad } from '@/utils';

const emit = defineEmits<{
  (e: 'toast'): void;
}>();

const color = ref('');

const onClick = () => {
  copyToClipboad(color.value);
  emit('toast');
};

const initColor = () => (color.value = generateColor());

onMounted(() => {
  initColor();
});
</script>

<style scoped>
.col {
  background-color: v-bind(color);
}
</style>
