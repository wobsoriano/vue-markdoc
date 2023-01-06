import { defineComponent, h } from 'vue'

export default defineComponent({
  setup(_props, { slots }) {
    return () => h('div', {
      class: 'callout',
      style: {
        height: '50px',
        width: '50px',
        background: 'red',
      },
    }, slots.default?.())
  },
})
