<template>
  <q-page class="row items-center justify-evenly fit">
    <img src="../assets/qr.png"
    style="position: absolute; top: 10px; left: 80px;width: 250px; height: 250px; z-index: 9999;" />

    <StrawberryMap class="fit"/>
  </q-page>
</template>

<script setup lang="ts">
import StrawberryMap from 'src/components/StrawberryMap.vue';

</script>
