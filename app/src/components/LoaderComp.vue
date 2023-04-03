<script lang="ts" setup>
function foo() {
  return;
}
</script>
<template>
  <div class="flex">
    <button :on-click="foo">Click me</button>
  </div>
</template>
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
