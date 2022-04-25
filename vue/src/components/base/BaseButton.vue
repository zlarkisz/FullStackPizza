<template>
  <component
    :is="tag"
    :key="tag"
    :href="href"
    :to="to"
    :target="target"
    :class="classes"
  >
    <img
      v-if="icon && Object.keys(icon).length !== 0"
      :src="imageSrc"
      :alt="icon.alt"
      class="button__image"
    >

    <span class="button__text">
      <slot name="text" />
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import Image from '@/types/image';

export default defineComponent({
  name: 'BaseButton',

  props: {
    theme: {
      type: String,
      default: 'primary',
      validator: (type: string) => ['primary', 'danger'].includes(type),
    },

    size: {
      type: String,
      default: 'small',
      validator: (size: string) => ['small', 'medium'].includes(size),
    },

    icon: {
      type: Object as PropType<Image>,
      default: () => ({}),
    },

    url: {
      type: String,
      default: '',
    },

    target: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const tag = computed(() => {
      if (!props.url) {
        return 'button';
      } if (/(http|tttps)|(tel:)|(mailto:)/.test(props.url) || props.target === '_blank') {
        return 'a';
      }
      return 'router-link';
    });
    const href = computed(() => (tag.value !== 'button' ? props.url : null));
    const to = computed(() => (tag.value === 'router-link' ? props.url : null));
    const classes = computed(() => ['button', `--${props.theme}`, `--${props.size}`]);
    /* eslint-disable global-require */
    const imageSrc = computed(() => (props.icon ? `${require(`@/assets/images/svg/${props.icon.image}`)}` : false)); // eslint-disable-line import/no-dynamic-require

    return {
      tag, href, to, classes, imageSrc,
    };
  },
});
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  @include transition;
  @include cursor-pointer;

  &.--primary {
    height: 40px;
    padding: 0 20px;
    background-color: $green;

    @media (hover: hover) {
      &:hover {
        background-color: $greenLight;
      }
    }

    .button__image {
      height: 20px;
      width: 20px;
    }
  }

  &__image {
    margin-right: 5px;
  }

  &__text {
    color: $white;
  }
}
</style>
