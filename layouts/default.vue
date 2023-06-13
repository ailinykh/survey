<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>

<template>
  <div>
    <nav
      class="p-5 bg-emerald-600 text-white shadow flex items-center justify-between"
    >
      <div>
        <span class="text-2xl cursor-pointer">Surveys</span>
      </div>
      <ul class="flex items-center text-xl">
        <li class="mx-4 flex items-center justify-between">
          <img
            class="rounded-full w-8 h-8 border-2 border-emerald-400 mx-2"
            :src="user?.user_metadata.avatar_url"
          />
          <span>{{ user?.user_metadata.full_name }}</span>
        </li>
        <li class="mx-4 flex items-center justify-between">
          <a href="#" class="duration-500" @click="logout"
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
