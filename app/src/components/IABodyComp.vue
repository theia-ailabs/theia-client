<script></script>
<template>
    <div class="bg-transparent z-0 relative h-screen">
        <div v-if="listening()" class="">
            <button (click)="toTalk()">
                <app-svg-ia />
            </button>
        </div>
        <div v-if="talking()">
            <button (click)="toListen()">
                <app-svg-talking />
            </button>
        </div>
    </div>
</template>