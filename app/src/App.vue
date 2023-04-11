<template>
  <router-view />
</template>
<style>
@font-face {
  font-family: "Cubics";
  src: url("./assets/fonts/cubic.ttf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: transparent !important;
}

::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692) !important;
  border-radius: 1rem;
  margin: 0.4rem;
  margin-top: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0) !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: linear-gradient(
    30deg,
    rgba(140, 208, 11, 0.83),
    #cf0ccfbe
  ) !important;
  box-shadow: inset 0 0 6px rgb(206, 9, 212) !important;
}
@media (max-width: 700px) {
  .workspace {
    font-size: xx-small !important;
  }

  #faux-terminal .overlay {
    top: 70% !important;
  }
}

@media (min-width: 700px) {
  .nav h1 {
    font-size: 5vw;
  }
}

@media only screen and (min-width: 360px) {
  .nav h1 {
    font-size: 2.5vw;
  }
}
</style>
