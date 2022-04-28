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
import { defineComponent, onMounted, ref } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import ApiService from '@/services/api.service';

export default defineComponent({
  name: 'App',

  components: {
    AppLayout,
  },

  setup() {
    const data = ref(null);

    onMounted(async () => {
      const json = await ApiService.get({ url: 'sizes/sd' });
      data.value = json.data;
      console.log(data.value);
    });

    return { data };
  },
});
</script>

<style lang="scss">
#app {
  color: $default;
}
</style>
