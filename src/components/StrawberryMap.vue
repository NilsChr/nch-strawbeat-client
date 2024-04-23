<template>
  <mapbox-map :accessToken="accessToken" :center="[-500, 40]" :zoom="4.2" :maxBounds="bounds" :mapStyle="styleURL">
      <div class="dots-filter">
          <mapbox-marker v-for="marker in store.markers" :key="`marker-${marker.id}`" :lngLat="marker.coords" :draggable="true">
              <template v-slot:icon>
                  <div class="ping"></div>
              </template>
          </mapbox-marker>
      </div>
  </mapbox-map>
</template>
<script setup lang="ts">
import { MapboxMap, MapboxMarker } from "vue-mapbox-ts";
import "../socket/index"
import { useMainStore } from "src/stores/mainStore";
import { watch } from "vue";

const accessToken = 'pk.eyJ1Ijoibmlsc2NociIsImEiOiJja3kwZGJoa3QwMGtlMm9udjRod2Zocm10In0.Zinp_gFu9BXjcLi4vwWH_Q';

const styleURL = "mapbox://styles/nilschr/clv49xvhe00he01qp1ih1g4j3"; //"mapbox://styles/nilschr/clv49fpif00h401qr7owk7ubw"; // mapbox://styles/nilschr/clv49xvhe00he01qp1ih1g4j3

//const markers = ref<{id: number, coords: number[]}[]>([])
const store = useMainStore();

const bounds = [
  [-18.737117643503453, 54.3607659464934], // Southwest coordinates
  [48.353676682502524, 70.77302947200927] // Northeast coordinates
];

</script>
<style scoped>

.mapbox-map {
  position: absolute;
  top: 0px;
  left: 0px;
}



.dots-filter {
  filter: contrast(20);
  position: absolute;
  width: 100%;
  height: 100%;
}

.ping {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(235, 138, 238);

  -webkit-animation: pulse 2s linear;
  animation: pulse 2s linear;
  animation-direction: forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.mapboxgl-interactive {
  filter: contrast(20);
}

@keyframes pulse {
  0% {
      transform: scale(1.1);
      opacity: 1;
  }

  100% {
      transform: scale(2.2);
      opacity: 0;
  }
}
</style>
