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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
