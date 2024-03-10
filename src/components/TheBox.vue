<script setup>
import { ref } from 'vue';

const isHovered = ref(false);

const handleHover = () => {
  isHovered.value = !isHovered.value;
};
</script>

<template>
  <div class="conatiner" @mouseover.stop="handleHover" :class="{ hoverColor: isHovered }"></div>
</template>

<style scoped lang="scss">
.conatiner {
  width: 36px;
  height: 36px;
  background-color: #fff;
}

.hoverColor {
  background-color: blue;
}
</style>
