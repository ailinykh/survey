<script lang="ts" setup>
const { user } = useAuth();
</script>

<template>
  <div>
    <p v-if="user">Hello {{ user.name }}!</p>
    <p v-else>Hello world!</p>
  </div>
</template>
