<template>
  <button ref="button" type="button" class="button" @click.prevent="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import tippy, { type ReferenceElement } from 'tippy.js';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  message?: string;
}>();

defineEmits<{
  (e: 'click', event: Event): void;
}>();

const button = ref<null | HTMLElement>(null);

onMounted(() => {
  if (props.message) {
    tippy(button.value as HTMLElement, {
      content: props.message,
    });
  }
});

onUnmounted(() => {
  if (props.message) {
    (button.value as ReferenceElement)._tippy?.destroy();
  }
});
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;

  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);

  border: 2px solid transparent;
  border-radius: 10px;

  padding: 10px;

  cursor: pointer;

  transition: border ease-in 0.3s;
}

.button:hover {
  border: 2px solid #cd5d7d;
}
</style>
