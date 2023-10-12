<script setup>
import { ref } from 'vue'
import router from '@/router/router'

const formData = ref({
  phoneNumber: '',
  direction: ''
})

function sumbitForm() {
  if (formData.value.phoneNumber && formData.value.direction) {
    router.push({ name: 'Step 2' })
  } else {
    alert('Please fill out the fields!')
  }
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
          <div class="step__header-cell__number">2</div>

          <p class="step__header-cell__title">
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
        <p class="step__body__title">Реквизиты компании</p>

        <div class="company">
          <div class="company__logo">+ Добавить лого компаний</div>

          <div class="company__details">
            <p class="company__details__title">
              Название <span class="company__details__body">OOO Pronto Management services</span>
            </p>
            <p class="company__details__title">
              Тип организации <span class="company__details__body">Частная</span>
            </p>
            <p class="company__details__title">
              ИНН <span class="company__details__body">302922141</span>
            </p>
            <p class="company__details__title">
              Директор <span class="company__details__body">Мамадияров Хусниддин Улмасович</span>
            </p>
          </div>
        </div>
      </div>

      <div class="step__footer">
        <p class="step__footer__title">Дополнительная информация</p>

        <form class="form" @submit.prevent="sumbitForm">
          <div class="form__cell">
            <label for="tel" class="form__label"
              >Номер телефона
              <span class="form__label-icon">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="*"
                    d="M1.35908 4.95019L0.706721 4.43649C0.637532 4.3846 0.597995 4.31195 0.588111 4.21855C0.578227 4.11478 0.593053 4.03176 0.63259 3.96949C0.63259 3.95911 0.662242 3.92279 0.721548 3.86052L1.78904 2.83313L0.336063 2.66189C0.296526 2.65152 0.266874 2.64633 0.247105 2.64633C0.237221 2.63595 0.227337 2.63076 0.217453 2.63076C0.148263 2.61 0.0889579 2.55812 0.0395369 2.47509C0 2.38169 -0.00988421 2.28829 0.00988421 2.19489L0.276758 1.36986C0.296526 1.28684 0.35089 1.22457 0.439848 1.18306C0.528805 1.14155 0.607879 1.13117 0.677069 1.15193C0.686953 1.15193 0.72649 1.17269 0.795679 1.2142L2.07074 1.97696L1.77422 0.466998C1.76433 0.425487 1.75939 0.399543 1.75939 0.389165C1.75939 0.36841 1.75939 0.352844 1.75939 0.342466C1.75939 0.259444 1.78904 0.18161 1.84835 0.108966C1.91754 0.036322 1.99661 0 2.08557 0H2.90102C2.98997 0 3.06411 0.036322 3.12341 0.108966C3.1926 0.18161 3.2272 0.259444 3.2272 0.342466C3.2272 0.352844 3.2272 0.36841 3.2272 0.389165C3.2272 0.399543 3.22225 0.425487 3.21237 0.466998L2.91584 1.97696L4.20573 1.2142C4.27492 1.17269 4.31446 1.15193 4.32434 1.15193C4.40342 1.13117 4.48249 1.14155 4.56156 1.18306C4.65052 1.22457 4.70489 1.28684 4.72465 1.36986L4.99153 2.19489C5.0113 2.28829 4.99647 2.38169 4.94705 2.47509C4.90751 2.55812 4.84821 2.61 4.76913 2.63076C4.75925 2.63076 4.74442 2.63595 4.72465 2.64633C4.71477 2.64633 4.695 2.65152 4.66535 2.66189L3.19754 2.83313L4.27986 3.86052C4.33917 3.92279 4.36882 3.95911 4.36882 3.96949C4.41824 4.03176 4.43801 4.11478 4.42813 4.21855C4.41824 4.31195 4.37376 4.3846 4.29469 4.43649L3.64233 4.95019C3.56326 4.9917 3.47924 5.00726 3.39029 4.99689C3.30133 4.98651 3.23214 4.945 3.18272 4.87235C3.18272 4.86198 3.17777 4.8516 3.16789 4.84122C3.15801 4.83084 3.14318 4.8049 3.12341 4.76339L2.50071 3.34682L1.878 4.76339C1.86812 4.8049 1.85329 4.83084 1.83352 4.84122C1.82364 4.8516 1.8187 4.86198 1.8187 4.87235C1.77916 4.945 1.70997 4.98651 1.61113 4.99689C1.52217 5.00726 1.43815 4.9917 1.35908 4.95019Z"
                    fill="#ED5151"
                  />
                </svg> </span
            ></label>
            <input
              name="tel"
              id="tel"
              type="tel"
              class="form__input"
              v-model="formData.phoneNumber"
              required
            />
            <p class="form__info">
              На этот номер будет подключен к боту для получения важных уведомлениях
              <sub>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="info_FILL1_wght400_GRAD0_opsz24 1">
                    <path
                      id="Vector"
                      d="M6 8.5C6.14167 8.5 6.26042 8.45208 6.35625 8.35625C6.45208 8.26042 6.5 8.14167 6.5 8V6C6.5 5.85833 6.45208 5.73958 6.35625 5.64375C6.26042 5.54792 6.14167 5.5 6 5.5C5.85833 5.5 5.73958 5.54792 5.64375 5.64375C5.54792 5.73958 5.5 5.85833 5.5 6V8C5.5 8.14167 5.54792 8.26042 5.64375 8.35625C5.73958 8.45208 5.85833 8.5 6 8.5ZM6 4.5C6.14167 4.5 6.26042 4.45208 6.35625 4.35625C6.45208 4.26042 6.5 4.14167 6.5 4C6.5 3.85833 6.45208 3.73958 6.35625 3.64375C6.26042 3.54792 6.14167 3.5 6 3.5C5.85833 3.5 5.73958 3.54792 5.64375 3.64375C5.54792 3.73958 5.5 3.85833 5.5 4C5.5 4.14167 5.54792 4.26042 5.64375 4.35625C5.73958 4.45208 5.85833 4.5 6 4.5ZM6 11C5.30833 11 4.65833 10.8688 4.05 10.6062C3.44167 10.3438 2.9125 9.9875 2.4625 9.5375C2.0125 9.0875 1.65625 8.55833 1.39375 7.95C1.13125 7.34167 1 6.69167 1 6C1 5.30833 1.13125 4.65833 1.39375 4.05C1.65625 3.44167 2.0125 2.9125 2.4625 2.4625C2.9125 2.0125 3.44167 1.65625 4.05 1.39375C4.65833 1.13125 5.30833 1 6 1C6.69167 1 7.34167 1.13125 7.95 1.39375C8.55833 1.65625 9.0875 2.0125 9.5375 2.4625C9.9875 2.9125 10.3438 3.44167 10.6062 4.05C10.8688 4.65833 11 5.30833 11 6C11 6.69167 10.8688 7.34167 10.6062 7.95C10.3438 8.55833 9.9875 9.0875 9.5375 9.5375C9.0875 9.9875 8.55833 10.3438 7.95 10.6062C7.34167 10.8688 6.69167 11 6 11Z"
                      fill="#DFE2E9"
                    />
                  </g>
                </svg>
              </sub>
            </p>
          </div>

          <div class="form__cell">
            <label for="directions" class="form__label"
              >Направление
              <span class="form__label-icon">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="*"
                    d="M1.35908 4.95019L0.706721 4.43649C0.637532 4.3846 0.597995 4.31195 0.588111 4.21855C0.578227 4.11478 0.593053 4.03176 0.63259 3.96949C0.63259 3.95911 0.662242 3.92279 0.721548 3.86052L1.78904 2.83313L0.336063 2.66189C0.296526 2.65152 0.266874 2.64633 0.247105 2.64633C0.237221 2.63595 0.227337 2.63076 0.217453 2.63076C0.148263 2.61 0.0889579 2.55812 0.0395369 2.47509C0 2.38169 -0.00988421 2.28829 0.00988421 2.19489L0.276758 1.36986C0.296526 1.28684 0.35089 1.22457 0.439848 1.18306C0.528805 1.14155 0.607879 1.13117 0.677069 1.15193C0.686953 1.15193 0.72649 1.17269 0.795679 1.2142L2.07074 1.97696L1.77422 0.466998C1.76433 0.425487 1.75939 0.399543 1.75939 0.389165C1.75939 0.36841 1.75939 0.352844 1.75939 0.342466C1.75939 0.259444 1.78904 0.18161 1.84835 0.108966C1.91754 0.036322 1.99661 0 2.08557 0H2.90102C2.98997 0 3.06411 0.036322 3.12341 0.108966C3.1926 0.18161 3.2272 0.259444 3.2272 0.342466C3.2272 0.352844 3.2272 0.36841 3.2272 0.389165C3.2272 0.399543 3.22225 0.425487 3.21237 0.466998L2.91584 1.97696L4.20573 1.2142C4.27492 1.17269 4.31446 1.15193 4.32434 1.15193C4.40342 1.13117 4.48249 1.14155 4.56156 1.18306C4.65052 1.22457 4.70489 1.28684 4.72465 1.36986L4.99153 2.19489C5.0113 2.28829 4.99647 2.38169 4.94705 2.47509C4.90751 2.55812 4.84821 2.61 4.76913 2.63076C4.75925 2.63076 4.74442 2.63595 4.72465 2.64633C4.71477 2.64633 4.695 2.65152 4.66535 2.66189L3.19754 2.83313L4.27986 3.86052C4.33917 3.92279 4.36882 3.95911 4.36882 3.96949C4.41824 4.03176 4.43801 4.11478 4.42813 4.21855C4.41824 4.31195 4.37376 4.3846 4.29469 4.43649L3.64233 4.95019C3.56326 4.9917 3.47924 5.00726 3.39029 4.99689C3.30133 4.98651 3.23214 4.945 3.18272 4.87235C3.18272 4.86198 3.17777 4.8516 3.16789 4.84122C3.15801 4.83084 3.14318 4.8049 3.12341 4.76339L2.50071 3.34682L1.878 4.76339C1.86812 4.8049 1.85329 4.83084 1.83352 4.84122C1.82364 4.8516 1.8187 4.86198 1.8187 4.87235C1.77916 4.945 1.70997 4.98651 1.61113 4.99689C1.52217 5.00726 1.43815 4.9917 1.35908 4.95019Z"
                    fill="#ED5151"
                  />
                </svg> </span
            ></label>
            <select
              v-model="formData.direction"
              name="directions"
              id="directions"
              class="form__input form__input-select"
              required
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div class="form__cell">
            <label for="email" class="form__label">Эл.почта</label>
            <input type="email" name="email" id="email" class="form__input" />
          </div>

          <div class="form__cell">
            <label for="website" class="form__label">Веб-сайт</label>
            <input type="text" name="website" id="website" class="form__input" />
          </div>

          <div class="form__cell form__cell-large">
            <label for="address" class="form__label">Адрес</label>
            <input type="text" name="address" id="address" class="form__input" />
          </div>

          <div class="form__reminder">
            <svg
              class="form__reminder__icon"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="*"
                d="M1.35908 4.95019L0.706721 4.43649C0.637532 4.3846 0.597995 4.31195 0.588111 4.21855C0.578227 4.11478 0.593053 4.03176 0.63259 3.96949C0.63259 3.95911 0.662242 3.92279 0.721548 3.86052L1.78904 2.83313L0.336063 2.66189C0.296526 2.65152 0.266874 2.64633 0.247105 2.64633C0.237221 2.63595 0.227337 2.63076 0.217453 2.63076C0.148263 2.61 0.0889579 2.55812 0.0395369 2.47509C0 2.38169 -0.00988421 2.28829 0.00988421 2.19489L0.276758 1.36986C0.296526 1.28684 0.35089 1.22457 0.439848 1.18306C0.528805 1.14155 0.607879 1.13117 0.677069 1.15193C0.686953 1.15193 0.72649 1.17269 0.795679 1.2142L2.07074 1.97696L1.77422 0.466998C1.76433 0.425487 1.75939 0.399543 1.75939 0.389165C1.75939 0.36841 1.75939 0.352844 1.75939 0.342466C1.75939 0.259444 1.78904 0.18161 1.84835 0.108966C1.91754 0.036322 1.99661 0 2.08557 0H2.90102C2.98997 0 3.06411 0.036322 3.12341 0.108966C3.1926 0.18161 3.2272 0.259444 3.2272 0.342466C3.2272 0.352844 3.2272 0.36841 3.2272 0.389165C3.2272 0.399543 3.22225 0.425487 3.21237 0.466998L2.91584 1.97696L4.20573 1.2142C4.27492 1.17269 4.31446 1.15193 4.32434 1.15193C4.40342 1.13117 4.48249 1.14155 4.56156 1.18306C4.65052 1.22457 4.70489 1.28684 4.72465 1.36986L4.99153 2.19489C5.0113 2.28829 4.99647 2.38169 4.94705 2.47509C4.90751 2.55812 4.84821 2.61 4.76913 2.63076C4.75925 2.63076 4.74442 2.63595 4.72465 2.64633C4.71477 2.64633 4.695 2.65152 4.66535 2.66189L3.19754 2.83313L4.27986 3.86052C4.33917 3.92279 4.36882 3.95911 4.36882 3.96949C4.41824 4.03176 4.43801 4.11478 4.42813 4.21855C4.41824 4.31195 4.37376 4.3846 4.29469 4.43649L3.64233 4.95019C3.56326 4.9917 3.47924 5.00726 3.39029 4.99689C3.30133 4.98651 3.23214 4.945 3.18272 4.87235C3.18272 4.86198 3.17777 4.8516 3.16789 4.84122C3.15801 4.83084 3.14318 4.8049 3.12341 4.76339L2.50071 3.34682L1.878 4.76339C1.86812 4.8049 1.85329 4.83084 1.83352 4.84122C1.82364 4.8516 1.8187 4.86198 1.8187 4.87235C1.77916 4.945 1.70997 4.98651 1.61113 4.99689C1.52217 5.00726 1.43815 4.9917 1.35908 4.95019Z"
                fill="#ED5151"
              />
            </svg>
            <p class="form__reminder__text">Обязательные поля для заполнения</p>
          </div>

          <div class="form__line"></div>

          <button type="submit" class="form__button">Далее</button>
        </form>
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
}

.step {
  width: 100%;
  background-color: $white;
  padding: 24px 72px;
  border-radius: 6px;

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

    .company {
      margin-top: 32px;
      display: flex;
      align-items: center;

      &__logo {
        width: 160px;
        height: 95px;
        border: 1px dashed #9eabbe;
        border-radius: 6px;
        background-color: $lightBlueGray;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #9eabbe;
        font-size: 12px;
        padding: 12px;
        cursor: pointer;
        user-select: none;
      }

      &__details {
        margin-left: 150px;

        &__title {
          color: $steelGray;
          font-size: 14px;
          margin-bottom: 9px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        &__body {
          color: $dimGray;
          font-weight: 500;
          margin-left: 16px;
        }
      }
    }
  }

  &__footer {
    margin-top: 24px;
    &__title {
      font-weight: 500;
      color: $dimGray;
    }

    .form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      &__cell {
        margin-top: 29px;
        width: 49%;
        display: flex;
        flex-direction: column;

        &-large {
          width: 100%;
        }
      }

      &__label {
        font-size: 12px;
        color: $dimGray;
        display: flex;
        align-items: center;

        &-icon {
          margin: 0 0 3px 3px;
        }
      }

      &__input {
        width: 100%;
        margin-top: 8px;
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

      &__info {
        margin-top: 8px;
        color: $steelGray;
        font-size: 12px;
        font-style: italic;
      }

      &__reminder {
        margin-top: 32px;
        display: flex;
        align-items: center;

        &__text {
          font-size: 14px;
          color: $steelGray;
          font-style: italic;
          margin-left: 4px;
        }
      }

      &__line {
        width: 100%;
        height: 1px;
        background-color: $lightGray;
        margin-top: 16px;
      }

      &__button {
        padding: 10px 16px;
        margin-top: 24px;
        color: $deepSkyBlue;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        background-color: $white;
        border: 1px solid $deepSkyBlue;
        border-radius: 6px;
        margin-left: auto;
        transition: all 0.5s ease;

        &:hover {
          background-color: $deepSkyBlue;
          color: $white;
        }
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
