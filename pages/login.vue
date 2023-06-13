<script lang="ts" setup>
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/");
  }
});

const login = async () => {
  const { error } = await auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  }
};

definePageMeta({
  layout: false,
});
</script>

<template>
  <div
    class="prose md:flex md:items-center md:justify-center h-96"
  >
    <div class="">
      <h1>Welcome to Surveys</h1>
      <button
        class="bg-emerald-500 text-white font-bold py-2 px-4 rounded"
        @click="login"
      >
        Log in with Google
      </button>
    </div>
  </div>
</template>
