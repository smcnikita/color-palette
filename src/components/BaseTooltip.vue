<template>
  <div class="tooltip">
    <BaseButton message="new colors" @click.prevent="$emit('newColors')">
      <BaseIcon fill="#232323">
        <IconsRefresh />
      </BaseIcon>
    </BaseButton>
    <BaseButton @click="ocClick" id="settings">
      <BaseIcon fill="#232323">
        <IconsSettings />
      </BaseIcon>
    </BaseButton>
  </div>

  <BasePopper
    ref="target"
    :count="count"
    :isShowPopper="isShowPopper"
    @new-colors="$emit('newColors')"
    @clear="$emit('clear')"
    @change-grid="$emit('changeGrid', $event)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';
import IconsRefresh from './icons/IconsRefresh.vue';
import IconsSettings from './icons/IconsSettings.vue';
import BasePopper from './BasePopper.vue';
import { onClickOutside } from '@vueuse/core';

defineProps<{ count: 3 | 5 }>();

defineEmits<{
  (e: 'newColors'): void;
  (e: 'clear'): void;
  (e: 'changeGrid', value: 3 | 5): void;
}>();

const target = ref(null);
const isShowPopper = ref(false);

const ocClick = () => {
  isShowPopper.value = !isShowPopper.value;
};

onClickOutside(target, (event: PointerEvent) => {
  const target = event.target as HTMLElement;

  if (target.id !== 'settings') {
    isShowPopper.value = false;
  }
});
</script>

<style scoped>
.tooltip {
  position: absolute;
  bottom: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  gap: 24px;

  background-color: rgba(255, 255, 255, 0.1);

  border-radius: 10px;

  padding: 8px 10px;

  z-index: 2;
}
</style>
