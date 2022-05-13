# vite-plugin-markdoc

[![Build Size](https://img.shields.io/bundlephobia/minzip/vite-plugin-markdoc?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=vite-plugin-markdoc)
[![Version](https://img.shields.io/npm/v/vite-plugin-markdoc?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/vite-plugin-markdoc)

A plugin that enables you to import markdown files on your Vite projects. It uses [stripe's](https://stripe.com/) [Markdoc](https://markdoc.io/) to parse and transform `.md` files.

## Installation

```bash
pnpm add vite-plugin-markdoc -D
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import markdoc from 'vite-plugin-markdoc'

export default defineConfig({
  ...
  plugins: [markdoc()]
});
```

```md
---
title: What is Markdoc?
---

# {% $markdoc.frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}
```

```ts
import Markdoc from '@markdoc/markdoc'
import content from './contents/doc.md'

const html = Markdoc.renderers.html(content)
```

## Configuration

The plugin accepts an optional [`Markdoc.transform`](https://markdoc.io/docs/syntax#config) config:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import markdoc from 'vite-plugin-markdoc'

export default defineConfig({
  plugins: [markdoc({
    nodes: {...},
    tags: {...},
    ...
  })]
});
```

## TypeScript Shim

```ts
declare module '*.md' {
  import type { RenderableTreeNode } from '@markdoc/markdoc'
  const Node: RenderableTreeNode
  export default Node
}
```

Save as `vite.d.ts` for instance.

## License

MIT
