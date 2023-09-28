<script setup></script>

<template>
  <div class="login__ecp">
    <p class="login__title">Вход с помощью ЭЦП</p>

    <button type="button" class="login__choose-key">
      <span class="login__ecp-text">Выберите ключ</span>
      <svg
        class="foler-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="folder">
          <path
            id="Vector"
            d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
            fill="#7A889B"
          />
        </g>
      </svg>
    </button>
    <div class="login__info">
      <span>Что такое ЭЦП ключ?</span>
      <svg
        class="login__info-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="info">
          <path
            id="Vector"
            d="M7.33334 4.66659H8.66667V5.99992H7.33334V4.66659ZM7.33334 7.33325H8.66667V11.3333H7.33334V7.33325ZM8 1.33325C4.32 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32 14.6666 8 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8 1.33325ZM8 13.3333C5.06 13.3333 2.66667 10.9399 2.66667 7.99992C2.66667 5.05992 5.06 2.66659 8 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8 13.3333Z"
            fill="#0096B2"
          />
        </g>
      </svg>
    </div>
    <button type="button" class="login__ecp-button">Войти через ЭЦП</button>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/base.scss';

.login__ecp {
  padding: 25px 32px;
  border: 1px solid $lightGray;
  border-radius: 2px;
  background: $white;

  .login__title {
    font-size: 20px;
    color: $dimGray;
  }

  .login__choose-key {
    width: 100%;
    padding: 18px 172px 19px 172px;
    margin-top: 30px;
    border: 1px solid $lightGray;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    background: $lightestGray;

    .login__ecp-text {
      font-size: 16px;
      color: $steelGray;
    }

    .foler-icon {
      position: absolute;
      top: 16px;
      right: 17px;
    }
  }

  .login__info {
    margin-top: 14px;
    font-size: 14px;
    color: $dimGray;
    display: flex;
    align-items: center;

    .login__info-icon {
      margin-left: 5px;
    }
  }

  .login__ecp-button {
    width: 100%;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    margin-top: 26px;
    margin-bottom: 6px;
    padding: 18px 166px 19px 166px;
    color: $white;
    background-color: $deepSkyBlue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
