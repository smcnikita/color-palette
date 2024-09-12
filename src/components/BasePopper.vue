<template>
  <Transition>
    <template v-if="isShowPopper">
      <focus-trap :active="isShowPopper">
        <div class="popper">
          <button
            class="popper__button"
            @click.prevent="$emit('changeGrid', 3)"
            @mouseenter="onMouseenter(3)"
            @mouseleave="onMouseleave"
          >
            3 color grid
          </button>
          <button
            class="popper__button"
            @click.prevent="$emit('changeGrid', 5)"
            @mouseenter="onMouseenter(5)"
            @mouseleave="onMouseleave"
          >
            5 color grid
          </button>
          <button class="popper__button" @click.prevent="$emit('newColors')">new colors</button>
          <button class="popper__button" @click.prevent="$emit('clear')">clear</button>
        </div>
      </focus-trap>
    </template>
  </Transition>

  <ViewDridOnHover :defaultCount="count" :count="countOnHover" :isShow="isShowGrid" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ViewDridOnHover from './ViewDridOnHover.vue';

const props = defineProps<{
  isShowPopper: boolean;
  count: 3 | 5;
}>();

defineEmits<{
  (e: 'changeGrid', value: 3 | 5): void;
  (e: 'newColors'): void;
  (e: 'clear'): void;
}>();

watch(
  () => props.isShowPopper,
  (newValue) => {
    if (!newValue) {
      onMouseleave();
    }
  }
);

const countOnHover = ref<3 | 5>(3);
const isShowGrid = ref(false);

const onMouseenter = (value: 3 | 5) => {
  countOnHover.value = value;
  isShowGrid.value = true;
};

const onMouseleave = () => {
  isShowGrid.value = false;
};
</script>

<style scoped>
.popper {
  position: absolute;
  bottom: 86px;
  right: 12px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  background-color: rgba(255, 255, 255, 0.7);

  width: 140px;

  padding: 4px 0;

  border-radius: 10px;

  z-index: 2;
}

.popper__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 92px;

  font-size: 14px;

  color: #232323;
  background-color: transparent;

  border: none;
  border-radius: 10px;

  padding: 8px 10px;

  cursor: pointer;

  transition: background-color ease-in 0.2s;
}

.popper__button:hover {
  background-color: rgba(205, 93, 125, 0.2);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
