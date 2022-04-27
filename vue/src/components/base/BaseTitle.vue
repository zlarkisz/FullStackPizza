<template>
  <component :is="tag"
             :class="classes"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTitle',

  props: {
    level: {
      type: [Number, String],
      default: 2,
    },

    theme: {
      type: String,
      default: 'default',
    },
  },

  setup(props) {
    const tag = computed(() => `h${props.level}`);
    const classes = computed(() => ['title', `--${props.theme}`]);

    return { tag, classes };
  },
});
</script>

<style scoped lang="scss">
.title {
  &.--default {
    color: $default;
  }

  &.--pizza {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: url('@/assets/images/pizza/text-pizza-bg.jpg');
    background-size: contain;
    color: transparent;
  }
}
</style>
