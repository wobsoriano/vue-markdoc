<template>
  <div class="callout">
    ⚠️<slot />
  </div>
</template>

<script lang="ts">
export default{}
</script>

<style>
.callout {
  box-shadow: #e3e8ee 0 0 0 1px;
background-color: #fcf9e9;
padding: 12px;
margin-bottom: 12px;
}
</style>
