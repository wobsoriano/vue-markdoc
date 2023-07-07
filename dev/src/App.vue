<script setup lang="ts">
import Markdoc from '@markdoc/markdoc'
import render from '../../src'
import Callout from './Callout.vue'

const tags = {
  callout: {
    render: Callout as any,
    attributes: {},
  },
}

const doc = `
{% callout %}
Attention, over here!
{% /callout %}
`

const ast = Markdoc.parse(doc)
const content = Markdoc.transform(ast, { tags })

const ContentComponent = render(content)
</script>

<template>
  <ContentComponent />
</template>
