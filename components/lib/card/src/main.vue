<template>
  <div class="m-card">
    <div class="m-card-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="m-card-summary">
      {{summary}}
    </div>
    <div class="m-card-footer">
      footer
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-card',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>
