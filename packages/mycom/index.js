import myc from './src/mycom.vue'

myc.install = function(vue){
  vue.component(myc.name,myc)
}

export default myc