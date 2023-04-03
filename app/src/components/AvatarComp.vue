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
<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "AvatarComp" });
</script>
