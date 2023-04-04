<script lang="ts" setup>
import NavbarComp from "../components/NavbarComp.vue";
import IABodyComp from "/components/IABodyComp.vue";
import ChatComp from "/components/ChatComp.vue";
</script>
<template>
  <div class="home w-full h-screen">
    <NavbarComp class="z-50 fixed w-full bg-black" />
    <div id="main-display" class="bg-black">
      <div class="z-0 w-full h-screen mt-24">
        <IABodyComp class="h-screen" />
      </div>
      <div class="w-full h-screen">
        <ChatComp />
      </div>
    </div>
  </div>
</template>
