<script setup>
import { ref } from 'vue'
import router from "@/router/router";

const bankName = ref('')
const checkingAccount = ref('')
const submittedDetails = ref([])

function addBank() {
  submittedDetails.value.push({ bankName: bankName.value, checkingAccount: checkingAccount.value })
  bankName.value = ''
  checkingAccount.value = ''
}

function removeBank(index) {
  submittedDetails.value.splice(index, 1)
}

function goToNextPage() {
  if (submittedDetails.value.length) {
    router.push({name: "Step 3"})
  } else {
    alert("Please add the bank!")
  }
}

function skipStep() {
  router.push({name: "Step 3"})
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
          <div class="step__header-cell__number">3</div>

          <p class="step__header-cell__title">
            Шаг 3 <span class="step__header-cell__subtitle">Выбирать систему</span>
          </p>
        </div>

        <div class="step__header-cell">
          <div class="step__header-cell__number">4</div>

          <p class="step__header-cell__title">
            Шаг 4 <span class="step__header-cell__subtitle">Уведомление</span>
          </p>
        </div>
      </div>

      <div class="step__body">
        <p class="step__body__title">Банковские реквизиты</p>

        <form class="bank-form" @submit.prevent="addBank">
          <div class="bank-form__group">
            <label class="bank-form__label" for="banks">Банк</label>
            <select
              class="bank-form__input bank-form__input-select"
              name="banks"
              id="banks"
              required
              v-model="bankName"
            >
              <option value="Hamkorbank">Hamkorbank</option>
              <option value="Asia Alliance Bank">Asia Alliance Bank</option>
              <option value="Anorbank">Anorbank</option>
              <option value="Kapitalbank">Kapitalbank</option>
              <option value="NBU">NBU</option>
              <option value="Xalq banki">Xalq banki</option>
              <option value="Agrobank">Agrobank</option>
              <option value="Infinbank">Infinbank</option>
              <option value="SQB">SQB</option>
            </select>
          </div>

          <div class="bank-form__group">
            <label class="bank-form__label" for="checking-account">Расчетный счет</label>
            <input
              class="bank-form__input"
              type="text"
              name="checking-account"
              id="checking-account"
              required
              v-model="checkingAccount"
            />
          </div>

          <button class="bank-form__submit" type="submit">
            <svg
              class="bank-form__icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="add_circle">
                <path
                  fill="#0096b2"
                  id="Vector"
                  d="M7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337ZM11.3333 8.66671H8.66659V11.3334H7.33325V8.66671H4.66659V7.33337H7.33325V4.66671H8.66659V7.33337H11.3333V8.66671Z"
                />
              </g>
            </svg>
            Добавить
          </button>
        </form>
      </div>

      <div class="step__footer">
        <p class="step__footer__title">Добавленные банки</p>
        <div v-if="submittedDetails.length">
          <div class="step__footer-content" v-for="(entry, index) in submittedDetails" :key="index">
            <div class="step__footer-item">
              <p class="step__footer-item-text">
                Название банка<span class="step__footer-item-value">{{ entry.bankName }}</span>
              </p>
              <p class="step__footer-item-text">
                Расчетный счет<span class="step__footer-item-value">{{
                  entry.checkingAccount
                }}</span>
              </p>
            </div>

            <svg
              @click="removeBank(index)"
              class="step__footer-close-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="close">
                <path
                  id="Vector"
                  d="M12.6666 4.27337L11.7266 3.33337L7.99992 7.06004L4.27325 3.33337L3.33325 4.27337L7.05992 8.00004L3.33325 11.7267L4.27325 12.6667L7.99992 8.94004L11.7266 12.6667L12.6666 11.7267L8.93992 8.00004L12.6666 4.27337Z"
                  fill="#ED5151"
                />
              </g>
            </svg>
          </div>
        </div>

        <div class="step__footer-footer">
          <div class="step__footer__line"></div>

          <div class="step__footer__buttons">
            <button type="button" class="step__footer__buttons-button" @click="goToNextPage">Далее</button>
            <button type="button" class="step__footer__buttons-button" @click="skipStep">Пропустит</button>
            <i class="step__footer__buttons-reminder">
              Вы можете настроит позже на кабинете
            </i>
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

  &__body {
    margin-top: 42px;
    border-bottom: 1px solid $lightGray;
    padding-bottom: 32px;

    &__title {
      color: $dimGray;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }

    .bank-form {
      margin-top: 32px;
      display: flex;
      align-items: end;
      justify-content: space-between;

      &__group {
        display: flex;
        flex-direction: column;
        width: 246px;
      }

      &__label {
        color: $dimGray;
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 8px;
      }

      &__input {
        width: 100%;
        outline: none;
        border: 1px solid $lightGray;
        border-radius: 6px;
        background-color: $lightestGray;
        padding: 10px 12px;
        color: $steelGray;
        transition: all 0.5s ease;

        &-select {
          -webkit-appearance: none;
          -moz-appearance: none;

          background-image: url('@/assets/icons/arrow-down.svg');
          background-repeat: no-repeat;
          background-position: calc(100% - 10px);
        }

        &:focus {
          border-color: $deepSkyBlue;
          background-color: $white;
        }
      }

      &__submit {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        border: 1px solid $deepSkyBlue;
        border-radius: 6px;
        cursor: pointer;
        background: $white;
        color: $deepSkyBlue;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.5s ease;

        &:hover {
          background: $deepSkyBlue;
          color: white;
        }

        &:hover svg path {
          transition: all 0.5s ease;
          fill: $white;
        }
      }

      &__icon {
        margin-right: 10px;
      }
    }
  }

  &__footer {
    margin-top: 24px;

    &__title {
      color: $dimGray;
      font-size: 14px;
      font-weight: 500;
    }

    &-content {
      width: 100%;
      border-radius: 6px;
      background: $lightestGray;
      padding: 16px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:first-child {
        margin-top: 16px;
      }

      &:last-child {
        margin-bottom: 100px;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      &-text {
        color: $steelGray;
        font-size: 14px;
        font-weight: 400;

        &:first-child {
          margin-bottom: 6px;
        }
      }

      &-value {
        color: $dimGray;
        font-weight: 500;
        margin-left: 12px;
      }
    }

    &-close-icon {
      cursor: pointer;
    }

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
