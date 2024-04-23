<template>
  <q-page class="row items-center justify-evenly fit">
    <q-card class="q-pa-sm" style="position: absolute; top: 10px; left: 10px;width: 250px;  z-index: 9999;">
      <img src="../assets/Strawbeat Logo.png"/>

      <img src="../assets/qr.png" class="q-pt-lg q-pb-lg"/>
      <div class="row q-pa-sm items-center">
        <div class="q-pa-sm circle ping-kafka"></div>
        <div class="q-pl-md">MEWS ( via Kafka )</div>
      </div>
      <div class="row q-pa-sm items-center">
        <div class="q-pa-sm circle ping-mock"></div>
        <div class="q-pl-md">MOCK</div>
      </div>
    </q-card>

    <StrawberryMap class="fit"/>
  </q-page>
</template>

<script setup lang="ts">
import StrawberryMap from 'src/components/StrawberryMap.vue';

</script>
<style>
.circle {
  width:  30px;
  height: 30px;
  border-radius: 50%;
}

.ping-kafka {
  background-color: #FC5E58;
}
.ping-mock {
  background-color: #589cfc;
}

</style>
