<script lang="ts" setup>
const { user, login, logout, restore } = useAuth();
await restore();
</script>

<template>
  <div>
    <nav
      class="p-5 bg-green-600 text-white shadow flex items-center justify-between"
    >
      <div>
        <span class="text-2xl cursor-pointer">Surveys</span>
      </div>
      <ul class="flex items-center">
        <li v-if="!user" class="mx-4">
          <a
            href="#"
            class="text-xl duration-500"
            @click="login"
            >Login</a
          >
        </li>
        <li v-else class="mx-4">
          <a
            href="#"
            class="text-xl duration-500"
            @click="logout"
            >Logout</a
          >
        </li>
      </ul>
    </nav>
    <div class="p-10">
      <slot />
    </div>
  </div>
</template>
