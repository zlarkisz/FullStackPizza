<template>
  <label class="radio-label"
         for="radio-input"
  >
    <input id="radio-input"
           type="radio"
           class="radio-input"
           :name="name"
           :value="radioValue"
           :checked="checked"
           @input="onInput"
    >
    <BaseImage image="svg/dough-large.svg"
               alt="dough large"
               class="radio-image"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseImage from '@/components/base/BaseImage.vue';

export default defineComponent({
  name: 'BaseRadioButton',

  components: {
    BaseImage,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.radio-label {
  // input[type="radio"]:checked {

  // }
}
</style>
