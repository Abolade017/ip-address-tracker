<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { ref } from 'vue'
// import L from 'leaflet';
// var map = L.map('map').setView([51.505, -0.09], 13); 
const ipAddress = ref('')
</script>

<template>
  <main>
    <div class="flex flex-col h-screen max-h-screen">
      <!-- search/result column -->
      <div class="flex justify-center relative bg-hero-pattern bg-cover px-4 pb-32 pt-8 ">
        <!-- input search -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
          <div class="flex">
            <input type="text"
              class="flex-1 rounded-tl-md rounded-bl-md px-2 py-3 focus-within:outline-none placeholder:text-dark-gray"
              placeholder="search for any IP address or domain" v-model="ipAddress">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="text-white bg-black px-4 py-2 rounded-br-md rounded-tr-md felex items-center h-12 w-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </div>
          <!-- <div>{{ ipAddress }}</div> -->
        </div>
      </div>
      <!-- map column -->
      <div id="map"></div>
    </div>
  </main>
</template>
