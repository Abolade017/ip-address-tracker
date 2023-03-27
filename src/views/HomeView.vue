<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IpInfo from '../components/IpInfo.vue'
// @ts-ignore
import leaflet from 'leaflet'
import axios from 'axios';

let myMap: any;
const ipAddress = ref<string>("")
const ipInfo = ref<null>(null)
const api_key = ref<string>('at_UJxbjQQ8KiMaf9MPkByoA8YD6ZzQZ')
// @ts-ignore
onMounted((myMap) => {
  myMap = leaflet.map('map').setView([51.505, -0.09], 13);
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
  
  async function  getIpInfo(event:Event){
    try {
      await axios
        .get(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipAddress.value}`)
        .then(({ data }) => {
          const result = data.data;
          console.log(result)
          interface IpInfo {
            address: string,
            state: string,
            timeZone: string,
            isp: string,
            lat: number,
            lng: number
          }
          const ipInfo: IpInfo =
          {
            address: result.ip,
            state: result.location.region,
            timeZone: result.location.timeZone,
            isp: result.isp,
            lat: result.location.lat,
            lng: result.location.lng
          }
          leaflet.marker([ipInfo.lat, ipInfo.lng]).addTo(myMap)
          myMap.setView([ipInfo.lat, ipInfo.lng], 13)

        })
    }
    catch (error) {
      alert(error)
    }
  }

  return { ipAddress, ipInfo, getIpInfo }
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
              placeholder="search for any IP address or domain" v-model="ipAddress">
            <button @click="getIpInfo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="text-white bg-black px-4 py-2 rounded-br-md rounded-tr-md felex items-center h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <p>{{ ipAddress }}</p>
          </div>
          <!-- <div>{{ ipAddress }}</div> -->
        </div>
        <!-- IP info -->
        <IpInfo v-if="ipInfo" :info="ipInfo"/>

      </div>
      <div id="map" class="z-10 h-full">
      </div>
    </div>
  </main>
</template>
