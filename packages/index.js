import myc from './mycom'
import myc2 from './mycom2'

const components = [
  myc,
  myc2
]

const install = function (vue){
  if(install.installed)return
  components.map(component => vue.component(component.name,component))
}

if(typeof window !== 'undefind' && window.Vue)install(window.Vue)

export default {
  install,
  myc,
  myc2
}
