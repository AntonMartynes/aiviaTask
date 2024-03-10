<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, numeric } from '@vuelidate/validators';
import TheBox from '../components/TheBox.vue';

const sizeX = ref(null);
const sizeY = ref(null);

const rules = {
  sizeX: { required, numeric },
  sizeY: { required, numeric },
};

const v$ = useVuelidate(rules, { sizeX, sizeY });

const sizeXCount = computed(() => {
  return sizeX.value ? +sizeX.value : 0;
});

const sizeYCount = computed(() => {
  return sizeY.value ? +sizeY.value : 0;
});
</script>

<template>
  <v-card variant="outlined" class="mx-4 my-4">
    <v-card-title class="d-flex justify-center p-4">
      <h4>Game Form</h4>
    </v-card-title>
    <v-card-text>
      <v-form class="d-flex flex-column justify-center align-center">
        <v-text-field v-model="sizeX" @blur="v$.sizeX.$touch()" :class="{ error: v$.sizeX.$error }" style="width: 400px"
          label="sizeX" required variant="outlined"></v-text-field>
        <p v-if="v$.sizeX.$error" style="color: red">
          {{ v$.sizeX.$errors[0].$message }}
        </p>
        <v-text-field v-model="sizeY" :class="{ error: v$.sizeY.$error }" style="width: 400px" @blur="v$.sizeY.$touch()"
          label="sizeY" type="text" required variant="outlined"></v-text-field>
        <p v-if="v$.sizeY.$error" style="color: red">
          {{ v$.sizeY.$errors[0].$message }}
        </p>
      </v-form>
    </v-card-text>
  </v-card>
  <v-sheet :elevation="12" class="mx-4 my-4 bg-darken-1 d-flex flex-column justify-center align-center pa-4 container">
    <div class="rowBoxes d-flex container" v-for="(row, index) in sizeYCount" :key="index">
      <TheBox v-for="(box, index) in sizeXCount" :key="index" />
    </div>
  </v-sheet>
</template>

<style scoped>
.container {
  gap: 10px;
  background-color: burlywood;
  border-radius: 12px;
}
</style>