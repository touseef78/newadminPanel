<template>
  <div
    :class="`input-number${disabled ? ' input-number-disabled' : ''}${
      size == 'lg' ? ' input-number-lg' : ''
    }${size == 'sm' ? ' input-number-sm' : ''}`"
  >
    <div class="input-number-handler-wrap">
      <span
        :class="`input-number-handler input-number-handler-up${
          upDisabled ? ' input-number-handler-up-disabled' : ''
        }`"
        @click="handleClickUp"
      >
        <span class="input-number-handler-up-inner">
          <svg
            viewBox="64 64 896 896"
            width="1em"
            height="1em"
            fill="currentColor"
          >
            <path
              d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
            ></path>
          </svg>
        </span>
      </span>

      <span
        :class="`input-number-handler input-number-handler-down${
          downDisabled ? ' input-number-handler-down-disabled' : ''
        }`"
        @click="handleClickDown"
      >
        <span class="input-number-handler-down-inner">
          <svg
            viewBox="64 64 896 896"
            width="1em"
            height="1em"
            fill="currentColor"
          >
            <path
              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
            ></path>
          </svg>
        </span>
      </span>
    </div>

    <div class="input-number-input-wrap">
      <input
        class="input-number-input"
        type="number"
        :min="min"
        :max="max"
        :disabled="disabled"
        @focus="handleFocus"
        @focusout="handleFocusout"
        @keyup="handleKeyup"
        v-model.number="numberValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default() {
        return 1;
      },
    },
    max: {
      type: Number,
      default() {
        return 10;
      },
    },
    step: {
      type: Number,
      default() {
        return 1;
      },
    },
    value: {
      type: Number,
      default() {
        return 1;
      },
    },
    size: String,
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      inputContainer: "",
      upDisabled: false,
      downDisabled: false,
      numberValue: 0,
    };
  },
  mounted() {
    this.numberValue = this.value;

    if (this.value >= this.max) {
      this.upDisabled = true;
    }
    if (this.value <= this.min) {
      this.downDisabled = true;
    }
  },
  methods: {
    handleFocus(e) {
      e.target.parentElement.parentElement.classList.add(
        "input-number-focused"
      );
    },
    handleFocusout(e) {
      e.target.parentElement.parentElement.classList.remove(
        "input-number-focused"
      );
    },
    handleKeyup(e) {
      if (e.target.value >= this.max) {
        e.target.value = this.max;
        this.numberValue = this.max;

        this.upDisabled = true;
        this.downDisabled = false;
      } else {
        this.upDisabled = false;
        this.downDisabled = false;
      }

      if (e.target.value !== "") {
        if (e.target.value < this.min) {
          e.target.value = this.min;
          this.numberValue = this.min;

          this.downDisabled = true;
          this.upDisabled = false;
        }
      }
    },
    handleClickUp(e) {
      if (!e.target.classList.contains("input-number-handler-up-disabled")) {
        if (this.numberValue < this.max) {
          this.numberValue += this.step;
          this.downDisabled = false;
        }
        if (this.numberValue === this.max) {
          this.upDisabled = true;
        }
      }
    },
    handleClickDown(e) {
      if (!e.target.classList.contains("input-number-handler-down-disabled")) {
        if (this.numberValue > this.min) {
          this.numberValue -= this.step;
          this.upDisabled = false;
        }
        if (this.numberValue === this.min) {
          this.downDisabled = true;
        }
      }
    },
  },
};
</script>
