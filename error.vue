<script setup>
const props = defineProps({
  error: Object,
});

const errors = {
  403: {
    title: "Forbidden",
    image: "",
    text: [],
  },
  401: {
    title: "Unauthorized.",
    image: "",
    text: ["Please contact administrator."],
  },
  500: {
    title: "Internal Server Error",
    image: "",
    text: [],
  },
};

const data = errors[props.error.statusCode] || errors[500];
</script>

<template>
  <main class="h-screen">
    <div class="text-center py-10">
      <h2 class="text-4xl">{{ data.title }}</h2>
      <div class="text-xl">
        <p v-for="p in data.text" :key="p" v-html="p" />
      </div>
    </div>
  </main>
</template>
