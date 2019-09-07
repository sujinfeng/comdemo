<template>
  <div id="myc2">
    {{msg}}{{as}}
  </div>
</template>

<script>
export default {
  name: 'myc2',
  props: {
    msg:{
      type: String,
      default: 'ads2'
    }
    ,as:{
      type: String,
      default: 'a'
    }
  }
}
</script>

<style>
#myc2 {
  width:100px;
  height:100px;
}
</style>
