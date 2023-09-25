<template>
  <div class="col">
    <button type="button" class="title" title="copy" @click="onClick">
      {{ color }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateColor } from '@/utils/color';
import { copyToClipboad } from '@/utils';

const color = ref('');

const onClick = () => {
  copyToClipboad(color.value);
};

const initColor = () => {
  color.value = generateColor();
};

onMounted(() => {
  initColor();
});
</script>

<style scoped>
.col {
  height: 100%;
  background-color: v-bind(color);
}

.title {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  padding: 12px;
  margin: 12px;

  color: #000;
  background-color: #fff;

  opacity: 0.7;

  border: none;
  border-radius: 12px;

  cursor: pointer;

  text-transform: lowercase;
}
</style>
