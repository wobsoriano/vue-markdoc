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

To render a Vue component, provide the `components` object as an argument along with the `content`. The `components` object specifies a mapping from your tags and nodes to the corresponding Vue component.

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
    Callout
  }
})
</script>

<template>
  <ContentComponent />
</template>
```

```html
<template>
  <div class="callout">
    <slot />
  </div>
</template>

<style>
.callout {...}
</style>
```

## Related

- [vite-plugin-markdoc](https://github.com/wobsoriano/vite-plugin-markdoc) - Markdoc plugin for Vite
- [vite-plugin-markdoc-vue](https://github.com/wobsoriano/vite-plugin-markdoc-vue) - Render Markdoc extended markdowns as Vue components.

## License

MIT
