<template>
        <div class="mt-20">
      <h1
        class="welcome-title relative z-50 top-[20%] w-full text-center flex flex-wrap justify-center"
      >
        <div class="fx text-center flex flex-wrap justify-center">
          <div class="text-center">
            <span class="silver">T</span>
            <span class="silver">H</span>
            <span class="silver">E</span>
            <span>I</span>
            <span>A</span>
          </div>
        </div>
      </h1>
    </div>
</template>
<script></script>
<style scoped>
    
.welcome-title {
  font-family: "Cubics" !important;
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 0.5rem;
  letter-spacing: 0.5rem;
  color: yellow;
  transition: all 0.3s ease;
  z-index: 3;
}
.welcome-title:hover {
  transform: translate3d(0, -10px, 22px);
  color: yellow;
}
.silver {
  color: rgba(198, 198, 198, 0.8) !important;
}
.fx span {
  color: rgb(255, 230, 0);
  text-shadow: 0 0 0 #faebd7;
  animation: fxk 2s ease-in-out infinite alternate;
}
.fx span:nth-child(2) {
  animation-delay: 0.1s;
}
.fx span:nth-child(3) {
  animation-delay: 0.2s;
}
.fx span:nth-child(4) {
  animation-delay: 0.3s;
}
.fx span:nth-child(5) {
  animation-delay: 0.4s;
}
.fx span:nth-child(6) {
  animation-delay: 0.5s;
}
.fx span:nth-child(7) {
  animation-delay: 0.6s;
}
.fx span:nth-child(8) {
  animation-delay: 0.7s;
}
.fx span:nth-child(9) {
  animation-delay: 0.8s;
}
.fx span:nth-child(10) {
  animation-delay: 0.9s;
}
.fx span:nth-child(11) {
  animation-delay: 1s;
}
.fx span:nth-child(12) {
  animation-delay: 1.1s;
}
.fx span:nth-child(13) {
  animation-delay: 1.2s;
}
.fx span:nth-child(14) {
  animation-delay: 1.3s;
}
.fx span:nth-child(15) {
  animation-delay: 1.4s;
}
.fx span:nth-child(16) {
  animation-delay: 1.5s;
}
.fx span:nth-child(17) {
  animation-delay: 1.6s;
}
.fx span:nth-child(18) {
  animation-delay: 1.7s;
}
.fx span:nth-child(19) {
  animation-delay: 1.8s;
}
.fx span:nth-child(20) {
  animation-delay: 1.9s;
}
.fx span:nth-child(21) {
  animation-delay: 2s;
}
.fx span:nth-child(22) {
  animation-delay: 2.1s;
}
@keyframes fxk {
  to {
    text-shadow: 20px 0 70px #ae0ff7;
    color: rgba(150, 100, 200, 0.8);
  }
}
</style>