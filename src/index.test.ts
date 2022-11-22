import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { RenderableTreeNode, RenderableTreeNodes } from '@markdoc/markdoc'
import { defineComponent, h } from 'vue'
import dynamic from '.'

function removeSpaces(html: string) {
  return html.replace(/\s/g, '')
}

describe('Vue dynamic renderer', () => {
  it('renders a null node', () => {
    const example = { name: 'h1', children: ['test', null] }
    const output = dynamic(example as RenderableTreeNode)

    const wrapper = mount(output)

    expect(removeSpaces(wrapper.html())).toBe('<h1>test<!----></h1>')
  })

  it('renders a tag', () => {
    const example = { name: 'h1', children: ['test'] }
    const output = dynamic(example as RenderableTreeNode)

    const wrapper = mount(output)

    expect(wrapper.html()).toBe('<h1>test</h1>')
  })

  it('renders string and number child nodes', () => {
    const example = { name: 'h1', children: ['test ', 1] }
    const output = dynamic(example as RenderableTreeNode)

    const wrapper = mount(output)

    expect(wrapper.html()).toBe('<h1>test 1</h1>')
  })

  it('renders nested tags', () => {
    const example = {
      name: 'div',
      children: [{ name: 'p', children: ['test'] }],
    }
    const output = dynamic(example as RenderableTreeNode)

    const wrapper = mount(output)

    expect(removeSpaces(wrapper.html())).toBe('<div><p>test</p></div>')
  })

  it('renders an external component', () => {
    const components = {
      Foo: defineComponent({
        setup(_props, { slots }) {
          return () => h('div', null, slots)
        },
      }),
    }
    const example = { name: 'Foo', children: ['test'] }
    const output = dynamic(example as RenderableTreeNode, { components })

    const wrapper = mount(output)
    expect(wrapper.html()).toBe('<div>test</div>')
  })

  it('renders a fragment', () => {
    const example = [
      { name: 'p', children: ['foo'] },
      { name: 'p', children: ['bar'] },
    ]
    const output = dynamic(example as RenderableTreeNodes)

    const wrapper = mount(output)

    expect(removeSpaces(wrapper.html())).toBe('<p>foo</p><p>bar</p>')
  })

  describe('attributes', () => {
    it('renders with an id attribute', () => {
      const example = {
        name: 'h1',
        attributes: { id: 'foo' },
        children: ['test'],
      }
      // @ts-expect-error: Incompatible test object type
      const output = dynamic(example as RenderableTreeNode)

      const wrapper = mount(output)

      expect(wrapper.html()).toBe('<h1 id="foo">test</h1>')
    })

    it('renders with a class attribute', () => {
      const example = {
        name: 'h1',
        attributes: { class: 'foo bar' },
        children: ['test'],
      }
      // @ts-expect-error: Incompatible test object type
      const output = dynamic(example as RenderableTreeNode)

      const wrapper = mount(output)

      expect(wrapper.html()).toBe('<h1 class="foo bar">test</h1>')
    })

    it('renders with a number attribute value', () => {
      const example = {
        name: 'h1',
        attributes: { 'data-foo': 42 },
        children: ['test'],
      }
      // @ts-expect-error: Incompatible test object type
      const output = dynamic(example as RenderableTreeNode)

      const wrapper = mount(output)

      expect(wrapper.html()).toBe('<h1 data-foo="42">test</h1>')
    })
  })

  describe('rendering built-in nodes', () => {
    it('renders a fenced code block', () => {
      const example = {
        name: 'pre',
        attributes: { class: 'code code-ruby' },
        children: ['test'],
      }
      // @ts-expect-error: Incompatible test object type
      const output = dynamic(example)

      const wrapper = mount(output)

      expect(wrapper.html()).toBe('<pre class="code code-ruby">test</pre>')
    })
  })
})
