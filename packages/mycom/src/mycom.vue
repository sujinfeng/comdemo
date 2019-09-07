<template>
  <div id="myc">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'myc',
  props: {
    msg:{
      type: String,
      default: 'ads'
    }
  }
}
</script>

<style>
#myc {
  width:100px;
  height:100px;
  background-color: #9f9
}
</style>
