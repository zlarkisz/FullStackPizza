<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/"
                   class="header__logo"
      >
        <img
          src="@/assets/images/svg/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>

    <div class="header__right">
      <BaseButton url="/cart"
                  :icon="cartIcon"
                  class="header__cart"
      >
        <template #text>
          0&#8372;
        </template>
      </BaseButton>
      <BaseButton url="/login"
                  class="header__login"
      >
        <template #text>
          Увійти
        </template>
      </BaseButton>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Image from '@/types/image';
import BaseButton from '@/components/base/BaseButton.vue';

export default defineComponent({
  name: 'AppHeader',

  components: {
    BaseButton,
  },

  setup() {
    const cartIcon = ref<Image>({ image: 'cart.svg', alt: 'cart' });

    return { cartIcon };
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: $green;
  box-shadow: 0 4px 8px rgb(0 0 0 / 4%), 0 0 2px rgb(0 0 0 / 6%),
    0 0 1px rgb(0 0 0 / 4%);

  &__logo {
    height: auto;
    width: max-content;
  }

  &__cart {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-right: 10px;

    &-amount {
      margin-left: 10px;
    }
  }

  &__login {

  }

  &__right {
    display: flex;
    align-items: center;
  }
}
</style>
