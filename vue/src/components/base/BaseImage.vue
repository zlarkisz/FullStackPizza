<template>
  <img :src="imageSrc"
       :alt="alt"
  >
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseImage',

  props: {
    image: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    /* eslint-disable global-require */
    // eslint-disable-next-line import/no-dynamic-require
    const imageSrc = computed(() => `${require(`@/assets/images/${props.image}`)}`);

    return { imageSrc };
  },
});
</script>

<style scoped>

</style>
