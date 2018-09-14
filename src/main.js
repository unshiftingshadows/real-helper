import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

const ContentEditor = wrap(Vue, () => import('./components/ContentEditor.vue'))

window.customElements.define('my-custom-element', ContentEditor)
