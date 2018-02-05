<template>
  <div
    class="toast"
    v-show="showToastMessage"
    :class="showToastMessage ? 'in' : ''"
  >
    <div class="toast--overlay"></div>
    <div class="toast--message">
      <div class="container">
        <div class="col-md-7 col-lg-8">
          <p>Confirma a exclusão?</p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="row">
            <div class="col-md-6">
              <v-btn
                color="default"
                @click.prevent="closeToast"
              >
                Cancelar
              </v-btn>
            </div>
            <div class="col-md-6">
              <button
                class="primary"
                @click.prevent="confirmToast"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      confirm: null,
      showToastMessage: false
    }
  },
  watch: {
    getToastConfirm: {
      handler (value) {
        setTimeout(() => {
          this.confirm = null
        }, 500)
      }
    }
  },
  methods: {
    confirmToast () {
      this.confirm = true
      setTimeout(() => {
        this.showToastMessage = false
      }, 500)
    },
    closeToast () {
      this.confirm = false
      setTimeout(() => {
        this.showToastMessage = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
  .toast {
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: -100%;
    transition: 1s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 2;
    @media (min-width: 768px) {
      height: 0;
      top: 0;
      transition: none;
      width: 100%;
    }

    &.in {
      height: 100%;
      top: 0;
      &--overlay {
        @media (min-width: 768px) {
          background-color: transparentize($color: white, $amount: .7);
          bottom: 0;
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 0;
        }
      }
    }

    &--message {
      align-items: center;
      color: white;
      font-size: 18px;
      font-weight: bold;
      flex: 1;
      flex-direction: row;
      height: 100%;
      justify-content: center;
      left: 0;
      line-height: 1.38;
      padding: 0 20px;
      position: absolute;
      right: 0;
      text-align: center;
      transition: 1s cubic-bezier(0.25, 0.8, 0.25, 1);
      top: 0;
      z-index: 1;

      @media (min-width: 576px) {
        font-size: 26px;
      }

      @media (min-width: 768px) {
        height: 180px;
        margin-top: -180px;
        position: relative;
      }

      .in & {
        @media (min-width: 768px) {
          box-shadow: 0 12px 17px 0 rgba(0, 0, 0, 0.2);
          margin-top: 0;
        }
      }
    }

    &--confirm {
      .toast--message {
        background: red;
        color: #8d919a;
        text-align: left;
      }
    }
  }
</style>
