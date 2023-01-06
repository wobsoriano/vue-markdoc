import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="callout" style={{ height: '50px', width: '50px', background: 'red' }}>
        {slots.default?.()}
      </div>
    )
  },
})
