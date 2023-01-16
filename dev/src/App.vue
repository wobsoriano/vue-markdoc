<script setup lang="ts">
import Markdoc from '@markdoc/markdoc'
import render from '../../src'
// import Callout from './Callout.vue'
import a2aDoc from './a2a.md'

// const tags = {
//   callout: {
//     render: Callout,
//     attributes: {},
//   },
// }

// const doc = `
// # سرویس تسویه
// ## لیست تسویه ها
// #### در این بخش شما می‌توانید همه‌ی تسویه‌هایی را که تا به حال ثبت کرده‌اید، مشاهده نمایید.

// {% if true %}
// {% callout %}
// **نکته!**
// پارامتر deductible_amount نشان‌دهنده مبلغ قابل برداشت امروز و پارامتر blocked_amount نشان‌دهنده مبلغ مسدود‌شده در حساب است.
// {% /callout %}

// {% else /%}
// {% callout %}
// **نکته!**
// انواع حالت‌های ممکن تسویه (فیلد status مربوط به settlement) عبارتند از: INIT, PENDING, DONE, FAILED, CANCELED

// - INIT: وقتی که تسویه به بانک فرستاده می‌شود.
// - PENDING: وقتی که تسویه به بانک فرستاده شده و در انتظار رسیدن به سیکل مورد نظر است.
// - DONE: تسویه‌ای که با موفقیت انجام شده است.
// - FAILED: تسویه‌ای که با خطا مواجه شده است.
// - CANCELED: تسویه لغو شده است. لازم به ذکر است که امکان لغو تسویه در وضعیت تسویه‌ی آنی وجود ندارد. 
// {% /callout %}

// {% /if %}



// `

// const ast = Markdoc.parse(doc)
// const content = Markdoc.transform(ast, { tags })

// const ContentComponent = render(content)
</script>

<template>
  <!-- <ContentComponent /> -->
  <a2aDoc></a2aDoc>
</template>
