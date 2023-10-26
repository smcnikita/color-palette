<template>
  <div class="col">
    <div class="col_wrapper">
      <BaseButton message="copy" @click="onClick">
        {{ color }}
      </BaseButton>
      <BaseButton @click="toggleLock">
        <BaseIcon :fill="isSave ? '#CD5D7D' : '#232323'">
          <template v-if="isSave">
            <IconsLikeFill />
          </template>
          <template v-else>
            <IconsLike />
          </template>
        </BaseIcon>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
import IconsLikeFill from './icons/IconsLikeFill.vue';
import IconsLike from './icons/IconsLike.vue';
import BaseButton from './BaseButton.vue';
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

const clear = () => {
  localStorage.removeItem(`color-${props.index}`);
  isSave.value = false;
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

defineExpose({ initColor, clear });
</script>

<style scoped>
.col {
  background-color: v-bind(color);
}

.col_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 8px;
}
</style>
