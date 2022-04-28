<template>
  <div class="size-selector sheet">
    <BaseTitle class="size-selector__title">
      Оберіть розмір тіста
    </BaseTitle>

    <div class="sheet__content">
      <!-- <BaseRadioButton /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
// import BaseRadioButton from '@/components/base/BaseRadioButton.vue';

export default defineComponent({
  name: 'BuilderSizeSelector',

  components: {
    BaseTitle,
    // BaseRadioButton,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.size-selector {
  &__title {
    padding: 0 18px;
  }
}
</style>
