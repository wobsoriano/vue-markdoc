<script setup>
import Markdoc from '@markdoc/markdoc'
import render from '../../src'

const doc = `

{% table %}

- name {% width="50%" %}
- Type  {% colspan=2 %}
- Status  {% align="right" %}
---
- amount
- integer
- required
---
- iban
- string
- required
---
- track_id
- string 
- required
---
- payment_number
- integer
- optional
---
- notify_url
- string
- optional
---
- description
- string
- optional
---
- is_instant
- boolean
- optional
---
- type
- string
- optional
{% /table %}

`

const ast = Markdoc.parse(doc)
const content = Markdoc.transform(ast)

const ContentComponent = render(content)
</script>

<template>
  <ContentComponent />
</template>