<script setup lang="ts">
import BaseCol from '@/components/BaseCol.vue';
import BaseTooltip from './components/BaseTooltip.vue';
import showNotify from '@/utils/notify';
import { computed, ref } from 'vue';

const count = ref<3 | 5>(3);
const col = ref<null | InstanceType<typeof BaseCol>[]>(null);
const countTransform = computed(() => {
  const arr = [];
  for (let index = 0; index < count.value; index++) {
    arr.push((index + 1).toString());
  }
  return arr;
});

const notify = () => {
  showNotify('Color copied to the clipboard!');
};

const getNewColors = () => {
  col.value?.forEach((el) => el.initColor());
};

const clear = () => {
  col.value?.forEach((el) => el.clear());
};
</script>

<template>
  <main
    class="main grid h-screen grid grid__3 grid-cols-none grid-rows-3 md:grid-cols-3 md:grid-rows-none"
  >
    <BaseCol
      v-for="item in countTransform"
      ref="col"
      :key="item"
      :index="item.toString()"
      @toast="notify"
    />
    <BaseTooltip @new-colors="getNewColors" @clear="clear" />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  position: relative;
}
</style>
