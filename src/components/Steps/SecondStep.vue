<script setup>
</script>

<template>
  <div class="step-container">
    <div class="step">
      <div class="step__header">
        <div class="step__header-line"></div>
        <div class="step__header-cell">
          <div class="step__header-cell__number">1</div>

          <p class="step__header-cell__title">
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
  }
}

@media only screen and (max-width: 1226px) {
  .step-container {
    padding: 50px 160px;
  }
}
</style>

