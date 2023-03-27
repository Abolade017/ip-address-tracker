<script setup lang="ts">
interface IpInfo {
    address: string,
    state: string,
    timeZone: string,
    isp: string,
    lat: number,
    lng: number
}
const props = defineProps<{
    ipInfo: IpInfo
}>()
</script>

<template>
    <div
        class="absolute -bottom-40 md:-bottom-14 gay-y-4 gap-x-12 px-40 md:px-8 pt-8 pb-12 rounded-md bg-white flex flex-col md:flex-row">
        <!-- flex items -->
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">IP ADDRESS</h2> <span>{{ props.ipInfo.address }}</span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">LOCATION</h2>
            <span>{{ props.ipInfo.state }}</span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">timezone</h2>
            <span>UTC{{ props.ipInfo.timeZone }}</span>
        </div>
        <div class="flex flex-col">
            <h2 class="text-sm text-dark-gray uppercase">isp</h2>
            <span>{{ props.ipInfo.isp }}</span>
        </div>
    </div>
</template>
