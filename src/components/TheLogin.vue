<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const router = useRouter();

const emailFild = ref('');
const passwordFild = ref('');
const minPasswordLength = ref(6);

const isSubmited = ref(false);

const rules = computed(() => ({
  emailFild: { required, email },
  passwordFild: { required, minLength: minLength(minPasswordLength.value) },
}));

const v$ = useVuelidate(rules, { emailFild, passwordFild });

const submitLogin = (isValidForm) => {
  isSubmited.value = true;

  if (!isValidForm) return;

  router.push({
    name: 'game',
  });

  isSubmited.value = false;
};
</script>

<template>
  <v-card variant="outlined">
    <v-card-title class="d-flex justify-center p-4">
      <h3>Login Form</h3>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitLogin(!v$.emailFild.$invalid && !v$.passwordFild.$invalid)">
        <v-text-field v-model="emailFild" :class="{ error: v$.emailFild.$error }" label="Email" required
          variant="outlined" hide-details>
        </v-text-field>
        <p v-if="v$.emailFild.$invalid && isSubmited" style="color: red">
          {{ v$.emailFild.$silentErrors[0].$message }}
        </p>
        <v-text-field v-model="passwordFild" variant="outlined" class="mt-4" :class="{ error: v$.passwordFild.$error }"
          label="Password" type="password" required hide-details>
        </v-text-field>
        <p v-if="v$.passwordFild.$invalid && isSubmited" style="color: red">
          {{ v$.passwordFild.$silentErrors[0].$message }}
        </p>
        <v-btn class="mt-4" type="submit" color="primary" variant="outlined" elevation="1">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>


<style scoped lang="scss"></style>
