<script setup>
import router from "@/router/router";
function skipStep() {
  router.push({name: "Final"})
}
</script>

<template>
  <div class="step-container">
    <div class="step">
      <div class="step__header">
        <div class="step__header-line"></div>
        <div class="step__header-cell">
          <div class="step__header-cell__number step__header-cell__number-active">1</div>

          <p class="step__header-cell__title step__header-cell__title-active">
            Шаг 1 <span class="step__header-cell__subtitle">Реквизиты компании</span>
          </p>
        </div>

        <div class="step__header-cell">
          <div class="step__header-cell__number step__header-cell__number-active">2</div>

          <p class="step__header-cell__title step__header-cell__title-active">
            Шаг 2 <span class="step__header-cell__subtitle">Банковские реквизиты</span>
          </p>
        </div>

        <div class="step__header-cell">
          <div class="step__header-cell__number step__header-cell__number-active">3</div>

          <p class="step__header-cell__title step__header-cell__title-active">
            Шаг 3 <span class="step__header-cell__subtitle">Выбирать систему</span>
          </p>
        </div>

        <div class="step__header-cell">
          <div class="step__header-cell__number step__header-cell__number-active">4</div>

          <p class="step__header-cell__title step__header-cell__title-active">
            Шаг 4 <span class="step__header-cell__subtitle">Уведомление</span>
          </p>
        </div>
      </div>

      <div class="step__body">
        <p class="step__body-title">Настройка уведомлении</p>
        <p class="step__body-subtitle">На эти номера будет отправлено уведомления через СМС или телеграм бот</p>

        <div class="step__options">
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/shopping-cart.svg" alt="shopping-cart" />
              <div class="step__info">
                <p class="step__info-title">Маркет</p>
                <p class="step__info-subtitle">Онлайн-торговая платформа</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="market" class="form__label">Номер телефона</label>
              <input type="tel" id="market" class="form__input" value="+998">
            </form>
          </div>
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/document-copy.svg" alt="document-copy" />
              <div class="step__info">
                <p class="step__info-title">EDO</p>
                <p class="step__info-subtitle">Управления документооборотом</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="edo" class="form__label">Номер телефона</label>
              <input type="tel" id="edo" class="form__input" value="+998">
            </form>
          </div>
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/headphone.svg" alt="headphone" />
              <div class="step__info">
                <p class="step__info-title">CallCenter</p>
                <p class="step__info-subtitle">Система колл-центра</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="call-center" class="form__label">Номер телефона</label>
              <input type="tel" id="call-center" class="form__input" value="+998">
            </form>
          </div>
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/receipt-item.svg" alt="receipt-item" />
              <div class="step__info">
                <p class="step__info-title">FinDoc</p>
                <p class="step__info-subtitle">Финансовый документ оборот</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="findoc" class="form__label">Номер телефона</label>
              <input type="tel" id="findoc" class="form__input" value="+998">
            </form>
          </div>
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/box.svg" alt="box" />
              <div class="step__info">
                <p class="step__info-title">WMS</p>
                <p class="step__info-subtitle">Система управления складом</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="wms" class="form__label">Номер телефона</label>
              <input type="tel" id="wms" class="form__input" value="+998">
            </form>
          </div>
          <div class="step__option">
            <div class="step__option-top">
              <img class="step__icon" src="@/assets/icons/task-square.svg" alt="task-square" />
              <div class="step__info">
                <p class="step__info-title">FinDoc</p>
                <p class="step__info-subtitle">Управление задачами</p>
              </div>
            </div>

            <form class="step__option-bottom form">
              <label for="fin-doc" class="form__label">Номер телефона</label>
              <input type="tel" id="fin-doc" class="form__input" value="+998">
            </form>
          </div>
        </div>
      </div>

      <div class="step__footer">
          <div class="step__footer-footer">
            <div class="step__footer__line"></div>

            <div class="step__footer__buttons">
              <button type="button" class="step__footer__buttons-button">
                Далее
              </button>
              <button type="button" class="step__footer__buttons-button" @click="skipStep">
                Пропустит
              </button>
              <i class="step__footer__buttons-reminder">Вы можете настроит позже на кабинете </i>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/base.scss';
.step-container {
  display: flex;
  justify-content: center;
  padding: 50px 320px;
  background: $paleSilver;
  min-height: 100vh;
}

.step {
  width: 100%;
  background-color: $white;
  padding: 24px 72px;
  border-radius: 6px;
  position: relative;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    position: relative;

    &-line {
      position: absolute;
      top: 15px;
      left: 0;
      z-index: 0;
      width: 90%;
      height: 4px;
      background-color: #e5e7ed;
      border-radius: 12px;
    }

    &-cell {
      z-index: 1;

      &__number {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #b0bcc9;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        width: 33px;
        height: 33px;
        border: 3px solid #e5e7ed;
        border-radius: 50%;
        background-color: $white;

        &-active {
          background-color: $deepSkyBlue;
          color: $white;
          border-color: $lightBlueGray;
        }
      }

      &__title {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        color: #8e9eaf;
        font-weight: 500;
        font-family: 'Rubik', sans-serif;

        &-active {
          color: $deepSkyBlue;
        }
      }

      &__subtitle {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  // Body
  &__body {
    margin-top: 42px;
    padding-bottom: 8px;

    &-title,
    &-subtitle {
      text-align: center;
    }

    &-title {
      color: $dimGray;
      font-size: 20px;
      font-weight: 500;
    }

    &-subtitle {
      margin-top: 12px;
      color: #9eabbe;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__options {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__option {
    width: 48%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    padding: 18px 16px;
    border: 1px solid $lightGray;
    border-radius: 6px;

    &-top {
      display: flex;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: 15px;

      &__label {
        color: $dimGray;
        font-size: 12px;
      }

      &__input {
        width: 100%;
        border-radius: 6px;
        border: 1px solid $lightGray;
        background: $lightestGray;
        padding: 10px 12px;
        outline: none;
        margin-top: 8px;
        color: $steelGray;
      }
    }
  }

  &__icon {
    margin-right: 12px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-title {
      color: $slateBlue;
      font-size: 14px;
      font-weight: 600;
    }

    &-subtitle {
      color: #a8bcd2;
      font-size: 12px;
      font-weight: 400;
    }
  }

  // Footer
  &__footer {
    margin-top: 100px;

    &-footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &__line {
      width: 100%;
      height: 1px;
      background-color: $lightGray;
    }

    &__buttons {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      padding: 24px 72px;

      &-button {
        padding: 10px 16px;
        color: $deepSkyBlue;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        background-color: $white;
        border: 1px solid $deepSkyBlue;
        border-radius: 6px;
        transition: all 0.5s ease;

        &:first-child {
          margin-left: 16px;
        }

        &:hover {
          background-color: $deepSkyBlue;
          color: $white;
        }
      }

      &-reminder {
        color: $steelGray;
        font-size: 12px;
        margin-right: 12px;
      }
    }
  }
}

@media only screen and (max-width: 1226px) {
  .step-container {
    padding: 50px 160px;
  }
}
</style>

