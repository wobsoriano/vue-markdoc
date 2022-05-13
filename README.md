# vue-markdoc

Transform [Markdoc](https://markdoc.io/) renderable trees to Vue components.

## Installation

```bash
pnpm add vue-markdoc
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

## License

MIT
