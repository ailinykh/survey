<script lang="ts" setup>
const user = useSupabaseUser();

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="prose w-full max-w-2xl h-9">
    <p>Hello, {{ user?.user_metadata.full_name }}</p>
  </div>
</template>
