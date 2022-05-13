# vue-markdoc

Transform [Markdoc](https://markdoc.io/) renderable trees to Vue components.

## Installation

```bash
pnpm add @markdoc/markdoc vue-markdoc
```

## Usage

```html
<script setup>
import Markdoc from '@markdoc/markdoc'
import render from 'vue-markdoc'

const doc = `
# Getting started

Run this command to install the Markdoc library:
`

const ast = Markdoc.parse(doc)
const content = Markdoc.transform(ast)

const ContentComponent = render(content)
</script>

<template>
  <ContentComponent />
</template>
```

## Rendering Vue components

To render a Vue component, first create a renderable tree from your document calling `transform`.

```html
<script setup>
import Markdoc from '@markdoc/markdoc'
import render from 'vue-markdoc'
import Callout from './Callout.vue'

const tags = {
  callout: {
    render: 'Callout',
    attributes: {}
  }
};

const doc = `
{% callout %}
Attention, over here!
{% /callout %}
`;

const ast = Markdoc.parse(doc)
const content = Markdoc.transform(ast)

const ContentComponent = render(content, {
  components: {
    Callout: `Callout`
  }
})
</script>

<template>
  <ContentComponent />
</template>
```

## Related

- [vite-plugin-markdoc](https://github.com/wobsoriano/vite-plugin-markdoc) - Markdoc plugin for Vite

## License

MIT
