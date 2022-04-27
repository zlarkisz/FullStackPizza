<template>
  <AppLayout>
    <router-view v-slot="{ Component }">
      <transition name="router-fade"
                  mode="out-in"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

export default defineComponent({
  name: 'App',

  components: {
    AppLayout,
  },
});
</script>

<style lang="scss">
#app {
  color: $default;
}
</style>
