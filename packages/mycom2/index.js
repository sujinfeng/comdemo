import myc2 from './src/myc2.vue'

myc2.install = function(vue){
  vue.component(myc2.name,myc2)
}

export default myc2