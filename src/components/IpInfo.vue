<script setup lang="ts">
const props = defineProps([
    //@ts-ignore
    'info'
])
</script>

<template>
    <div
        class="absolute -bottom-40 md:-bottom-14 gay-y-4 gap-x-12 px-40 md:px-8 pt-8 pb-12 rounded-md bg-white flex flex-col md:flex-row">
        <!-- flex items -->
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">IP ADDRESS</h2> <span></span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">LOCATION</h2>
            <span></span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">LOCATION</h2>
            <span>UTC-</span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">LOCATION</h2>
            <span></span>
        </div>
    </div>
</template>
