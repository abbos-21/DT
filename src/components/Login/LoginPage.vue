<script setup>
import { ref } from 'vue'

import LoginEcp from '@/components/Login/LoginEcp/LoginEcp.vue'
import LoginSystem from '@/components/Login/LoginSystem/LoginSystem.vue'
let isEcp = ref(true)

function loginInterfaceSystem() {
  if (isEcp.value) {
    isEcp.value = false
  }
}

function loginInterfaceEcp() {
  if (!isEcp.value) {
    isEcp.value = true
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login">
      <div class="login__buttons">
        <button
          type="button"
          :class="{ 'button-styles-light': !isEcp }"
          class="login__button login__button--ecp"
          @click="loginInterfaceEcp"
        >
          Вход с помощью ЭЦП
        </button>
        <button
          type="button"
          :class="{ 'button-styles-dark': !isEcp }"
          class="login__button login__button--system"
          @click="loginInterfaceSystem"
        >
          Вход в систему
        </button>
      </div>

      <LoginEcp v-if="isEcp"></LoginEcp>
      <LoginSystem v-else></LoginSystem>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/base.scss';

.button-styles-light {
  color: $steelGray !important;
  border: 1px solid $lightBlueGray !important;
  box-shadow: 0 2px 2px 0 rgba(122, 136, 155, 0.16) !important;
  background: $white !important;
}

.button-styles-dark {
  color: $deepSkyBlue !important;
  background: $paleBlue !important;
  border: none !important;
  box-shadow: none !important;
}

.login-container {
  height: 150vh;
  display: flex;
  justify-content: center;
  background: $paleSilver;

  .login {
    position: relative;
    margin-top: 136px;
    &__buttons {
      margin-bottom: 24px;
    }

    &__button {
      padding: 11px 11px 12px 12px;
      font-size: 14px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition:
        background-color 0.5s,
        box-shadow 0.5s ease,
        color 0.5s ease;

      &--ecp {
        color: $deepSkyBlue;
        background: $paleBlue;
      }

      &--system {
        margin-left: 16px;
        color: $steelGray;
        border: 1px solid $lightBlueGray;
        box-shadow: 0 2px 2px 0 rgba(122, 136, 155, 0.16);
        background: $white;
      }
    }
  }
}
</style>
