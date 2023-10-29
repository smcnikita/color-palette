<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isShow" class="viewGrid">
        <div
          class="viewGrid_wrapper"
          :class="{
            viewGrid_wrapper__3: count === 3,
            viewGrid_wrapper__5: count === 5,
          }"
        >
          <div></div>
          <div></div>
          <div></div>
          <div v-if="count === 5"></div>
          <div v-if="count === 5"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  defaultCount: 3 | 5;
  count: 3 | 5;
  isShow: boolean;
}>();
</script>

<style scoped>
.viewGrid {
  position: absolute;
  top: 0;
  left: 0;

  width: 100dvw;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.viewGrid_wrapper {
  display: flex;
  gap: 8px;
}

.viewGrid_wrapper > div {
  width: 20px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .viewGrid_wrapper__3 {
    transform: rotate(90deg);
  }
}

@media screen and (max-width: 1000px) {
  .viewGrid_wrapper__5 {
    transform: rotate(90deg);
  }
}
</style>
