<template>
  <footer class="bg-white">
    <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <a class="flex justify-center space-x-6 " href="https://rickhenry.dev" target="_blank" rel="noopener noreferrer">
        <logo></logo>
      </a>
      <div class="mt-8 md:mt-0">
        <p class="text-center text-base text-gray-400">
          &copy; 2021 Rick Henry Development. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Logo from "@/components/Logo.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppFooter",
  components: {Logo},
});
</script>

<style scoped>

</style>
