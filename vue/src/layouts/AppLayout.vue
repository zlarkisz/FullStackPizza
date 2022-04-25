<template>
  <component :is="isLogin" >
    <slot />
  </component>
</template>

<script lang="ts">
import {
  defineComponent, defineAsyncComponent, ref, computed,
} from 'vue';

const AppLayoutDefault = defineAsyncComponent(
  () => import('@/layouts/AppLayoutDefault.vue'),
);

export default defineComponent({
  name: 'AppLayout',

  component: {
    AppLayoutDefault,
  },

  setup() {
    const login = ref(false);
    const isLogin = computed(() => (login.value ? false : AppLayoutDefault));

    return { login, isLogin };
  },
});
</script>

<style scoped>

</style>
