import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import leaflet from '../../node_modules/leaflet/dist/leaflet.css';


interface State {
  map: MapInfo[]
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      map: [],
    }
  },
})

interface MapInfo {
  address: string
  state: number
  timeZone: string
  isp: string,
  lat: string,
  lng: string
}
