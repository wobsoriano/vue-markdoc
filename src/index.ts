import type { RenderableTreeNodes, Scalar } from '@markdoc/markdoc'
import type { VNode } from 'vue'
import { defineComponent, h } from 'vue'

export default function dynamic(node: RenderableTreeNodes) {
  function deepRender(value: any): any {
    if (value == null || typeof value !== 'object')
      return value

    if (Array.isArray(value))
      return value.map(item => deepRender(item))

    if (value.$$mdtype === 'Tag')
      return render(value)

    if (typeof value !== 'object')
      return value

    const output: Record<string, Scalar> = {}
    for (const [k, v] of Object.entries(value)) output[k] = deepRender(v)
    return output
  }

  function render(node: RenderableTreeNodes): VNode {
    if (Array.isArray(node)) {
      return h(defineComponent({
        render() {
          return node.map(render)
        },
      }))
    }

    if (node === null || typeof node !== 'object') {
      return h(defineComponent({
        render() {
          return node
        },
      }))
    }

    const {
      name,
      attributes = {},
      children = [],
    } = node

    return h(name, {
      ...Object.keys(attributes).length === 0 ? null : deepRender(attributes),
    }, children.map(render))
  }

  return defineComponent({
    render() {
      return render(node)
    },
  })
}
