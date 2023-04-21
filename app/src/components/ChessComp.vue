<script lang="ts">
import { defineComponent } from "vue";
import { }
import useStore from "../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    function connect(): void {
      store.connect();
    }
    return {
      store,
      connect,
    };
  },
  data() {
    return {
      wPawn: require("../assets/img/chess/wPawn.png"),
      bKing: require("../assets/img/chess/bKing.png"),
      bPawn: require("../assets/img/chess/bPawn.png"),
    };
  },
});
</script>
<template>
  <div
    class="flex flex-wrap justify-center items-center h-screen w-screen"
    :class="
      store.dark ? 'bg-black/90 text-white/90' : 'bg-white/90 text-black/90'
    "
  >
    <div id="account" class="w-96 mx-4 p-4">
      <div class="p-8 text-lg">ACCOUNT</div>
    </div>
    <div id="board" class="w-96 p-4 pb-8 -mt-24">
      <div class="p-8 text-lg">BOARD</div>
      <div class="grid col-8 row-8 justify-center">
        <div class="flex w-full h-full">
          <div id="A1" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="A2" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="A3" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="A4" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="A5" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="A6" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="A7" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="A8" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
        </div>
        <div class="flex w-full">
          <div id="B2" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
          <div id="B2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="wPawn" alt="White Pawn" />
          </div>
        </div>
        <div class="flex w-full">
          <div id="C1" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="C2" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="C3" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="C4" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="C5" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="C6" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="C7" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="C8" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
        </div>
        <div class="flex w-full">
          <div id="D1" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="D2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="D3" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="D4" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="D5" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="D6" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="D7" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="D8" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
        </div>
        <div class="flex w-full">
          <div id="E1" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="E2" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="E3" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="E4" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="E5" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="E6" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="E7" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="E8" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
        </div>
        <div class="flex w-full">
          <div id="F1" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="F2" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="F3" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="F4" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="F5" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="F6" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
          <div id="F7" class="w-20 h-20" :class="`bg-${store.primaryColor}`"></div>
          <div id="F8" class="w-20 h-20" :class="`bg-${store.secondaryColor}`"></div>
        </div>
        <div class="flex w-full">
          <div id="G1" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G2" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G3" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G4" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G5" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G6" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G7" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
          <div id="G8" class="w-20 h-20" :class="`bg-${store.primaryColor}`">
            <img :src="bPawn" alt="Black Pawn" />
          </div>
        </div>
        <div class="flex w-full">
          <div
            id="H1"
            class="w-20 h-20"
            :class="`bg-${store.primaryColor}`"
          ></div>
          <div
            id="H2"
            class="w-20 h-20"
            :class="`bg-${store.secondaryColor}`"
          ></div>
          <div
            id="H3"
            class="w-20 h-20"
            :class="`bg-${store.primaryColor}`"
          ></div>
          <div id="H4" class="w-20 h-20" :class="`bg-${store.secondaryColor}`">
            <img :src="bKing" alt="Black King" />
          </div>
          <div
            id="H5"
            class="w-20 h-20"
            :class="`bg-${store.primaryColor}`"
          ></div>
          <div
            id="H6"
            class="w-20 h-20"
            :class="`bg-${store.secondaryColor}`"
          ></div>
          <div
            id="H7"
            class="w-20 h-20"
            :class="`bg-${store.primaryColor}`"
          ></div>
          <div
            id="H8"
            class="w-20 h-20"
            :class="`bg-${store.secondaryColor}`"
          ></div>
        </div>
      </div>
    </div>
    <div id="game" class="w-96 mx-4 p-4">
      <div class="my-4 p-8 text-lg">GAME</div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
