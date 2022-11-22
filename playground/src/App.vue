<script setup>
import Markdoc from '@markdoc/markdoc'
import render from 'vue-markdoc'
import Callout from './Callout.vue'

const tags = {
  callout: {
    render: Callout,
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
