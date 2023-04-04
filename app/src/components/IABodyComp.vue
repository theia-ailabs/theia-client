<script lang="ts">
import BaseIAComp from "components/BaseIAComp.vue";
import TalkIAComp from "components/TalkIAComp.vue";
</script>
<template>
    <div class="bg-transparent z-0 relative h-screen">
        <div v-if="listening()" class="">
            <button (click)="toTalk()">
                <BaseIAComp />
            </button>
        </div>
        <div v-if="talking()">
            <button (click)="toListen()">
                <TalkIAComp />
            </button>
        </div>
    </div>
</template>