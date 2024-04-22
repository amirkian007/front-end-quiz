<script setup lang="ts">
import { ref } from "vue";
import { submitAwnser } from "./submitAwnswer";

// make this code declarative, it is too imperative.

const message = ref("");
const isSubmitting = ref(false);
const isSuccess = ref(false);
const showLoading = ref(false);
const hasError = ref<string | unknown>(null);

async function submitForm() {
  isSubmitting.value = true;
  showLoading.value = true;
  hasError.value = null;
  try {
    await submitAwnser(message.value);
    isSubmitting.value = false;
    showLoading.value = false;
    isSuccess.value = true;
  } catch (err: unknown | string) {
    isSubmitting.value = false;
    showLoading.value = false;
    hasError.value = err;
  }
}
</script>

<template>
  <div v-if="!isSuccess" @submit.prevent="submitForm">
    <h2>City quiz</h2>
    <p>What is the capital city of IRAN?</p>
    <p v-if="showLoading">Loading ...</p>
    <p v-if="hasError" className="Error">
      {{ hasError }}
    </p>
    <form class="form">
      <textarea id="message" v-model="message"></textarea>
    
      <button :disabled="isSubmitting">Submit</button>
    </form>
  </div>
  <div v-else>
    <h2>That's right!</h2>
  </div>
</template>
