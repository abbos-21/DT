<script setup>
</script>

<template>
  <form class="login__system">
    <p class="login__title">Вход в систему</p>

    <input type="text" class="login__input login__input-username" placeholder="Логин" required />
    <div class="position-relative">
      <input type="password" class="login__input login__input-password" placeholder="Пароль" required />
      <svg
          class="visibility-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <g id="visibility">
          <path
              id="Vector"
              d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.79 17.5 12 17.5C8.21 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
              fill="#A2A5B9"
          />
        </g>
      </svg>
    </div>
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
    <button type="submit" class="login__ecp-button">Войти</button>
  </form>
</template>

<style scoped lang="scss">
@import '../../../assets/base';

.login__system {
  padding: 25px 32px;
  border: 1px solid $lightGray;
  border-radius: 2px;
  background: $white;

  .login__title {
    font-size: 20px;
    color: $dimGray;
    text-align: center;
  }

  .login__input {
    padding: 20px;
    width: 463px;
    font-size: 16px;
    border: 1px solid $lightGray;
    border-radius: 4px;
    outline: none;
    color: $dimGray;
    background: $lightestGray;
  }

  .login__input::placeholder {
    color: $steelGray;
  }

  .login__input-username {
    margin-top: 31px;
  }

  .position-relative {
    position: relative;
    margin-top: 16px; // for .login__input-password
  }

  .visibility-icon {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
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
    margin-top: 25px;
    margin-bottom: 7px;
    padding: 18px 166px 19px 166px;
    color: $white;
    background-color: $deepSkyBlue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
