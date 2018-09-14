import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

const ContentEditor = wrap(Vue, () => import('./components/ContentEditor.vue'))

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ContentEditor)
}

export default ContentEditor