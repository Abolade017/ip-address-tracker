<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IpInfo from '../components/IpInfo.vue'
// @ts-ignore
import leaflet from 'leaflet'
import axios from 'axios';
interface IpInfo {
  address: string,
  state: string,
  timeZone: string,
  isp: string,
  lat: number,
  lng: number
};
let myMap: any;
const queryIp = ref<string>("")
const ipInfo = ref<IpInfo>()
const api_key = ref<string>('at_UJxbjQQ8KiMaf9MPkByoA8YD6ZzQZ')
async function getIpInfo(event: Event) {
  try {
    await axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_UJxbjQQ8KiMaf9MPkByoA8YD6ZzQZ&ipAddress=${queryIp.value}`)
      .then(function (response) {
        const result = response.data;
        console.log(result)
        ipInfo.value =
        {
          address: result.ip,
          state: result.location.region,
          timeZone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng
        }
        leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(myMap)
        myMap.setView([ipInfo.value.lat, ipInfo.value.lng], 13)

      })
  }
  catch (error) {
    alert(error)
  }
}

// @ts-ignore
onMounted(() => {
  myMap = leaflet.map('map').setView([51.505, -0.09], 9);
  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(myMap);
  var circle = leaflet.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(myMap);

  myMap.locate({ setView: true, maxZoom: 16 });
  var polygon = leaflet.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(myMap);
  return { queryIp, getIpInfo, ipInfo }
})

</script>

<template>
  <main>
    <div class="flex flex-col h-screen max-h-screen">
      <!-- search/result column -->
      <div class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pb-32 pt-8 ">
        <!-- input search -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
          <div class="flex">
            <input type="text"
              class="flex-1 rounded-tl-md rounded-bl-md px-2 py-3 focus-within:outline-none placeholder:text-dark-gray"
              placeholder="search for any IP address or domain" v-model="queryIp">
            <button @click="getIpInfo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="text-white bg-black px-4 py-2 rounded-br-md rounded-tr-md felex items-center h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <!-- <p>{{ queryIp }}</p> -->
          </div>
          <!-- <div>{{ ipAddress }}</div> -->
        </div>
        <!-- IP info -->
        <IpInfo v-if="ipInfo" :ipInfo="ipInfo" />

      </div>
      <div id="map" class="z-10 h-full">
      </div>
    </div>
  </main>
</template>
