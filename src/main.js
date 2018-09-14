import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

// const ContentEditor = wrap(Vue, () => import('./components/ContentEditor.vue'))
const ContentModule = wrap(Vue, () => import('./components/modules/Content.vue'))

if (typeof window !== 'undefined' && window.Vue) {
  // window.Vue.use(ContentEditor)
  window.Vue.use(ContentModule)
}

export default ContentModule