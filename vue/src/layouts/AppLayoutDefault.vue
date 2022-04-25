<template>
  <AppHeader />
  <main class="app-layout-dsefault">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/layouts/AppHeader.vue';

export default defineComponent({
  name: 'AppLayoutDefault',

  components: {
    AppHeader,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>
