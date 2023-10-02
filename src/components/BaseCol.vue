<template>
  <div class="col">
    <button
      type="button"
      class="ml-3 mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
      data-tooltip-target="tooltip-default"
      @click="onClick"
    >
      {{ color }}
    </button>
    <button
      type="button"
      class="ml-3 mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      @click="toggleLock"
    >
      <template v-if="isSave">unlock</template>
      <template v-else>lock</template>
    </button>
    <button
      type="button"
      class="ml-3 mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isSave"
      @click="getNewColor"
    >
      update
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateColor } from '@/utils/color';
import { copyToClipboad } from '@/utils';

const props = defineProps<{
  index: string;
}>();

const emit = defineEmits<{
  (e: 'toast'): void;
}>();

const color = ref('');
const isSave = ref(false);

const onClick = () => {
  copyToClipboad(color.value);
  emit('toast');
};

const toggleLock = () => {
  if (isSave.value) {
    localStorage.removeItem(`color-${props.index}`);
    isSave.value = false;
  } else {
    localStorage.setItem(`color-${props.index}`, color.value);
    isSave.value = true;
  }
};

const getNewColor = () => {
  initColor();
};

const initColor = () => {
  const key = localStorage.getItem(`color-${props.index}`);

  if (key === null) {
    color.value = generateColor();
  } else {
    isSave.value = true;
    color.value = key;
  }
};

onMounted(() => {
  initColor();
});
</script>

<style scoped>
.col {
  background-color: v-bind(color);
}
</style>
