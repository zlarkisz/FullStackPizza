<template>
  <div class="home">
    <div class="container">
      <BaseTitle :level="1"
                 theme="pizza"
                 class="home__title"
      >
        конструктор піци
      </BaseTitle>

      <div class="home__top">
        <BuilderSizeSelector />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BuilderSizeSelector from '@/components/builder/BuilderSizeSelector.vue';

export default defineComponent({
  name: 'Home',

  components: {
    BaseTitle,
    BuilderSizeSelector,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home {
  &__title {
    text-transform: capitalize;
  }
}
</style>
