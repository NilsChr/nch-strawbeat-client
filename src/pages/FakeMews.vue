<template>
  <q-page class="row items-start justify-evenly q-pa-lg">

    <div class="column ">
      <img src="../assets/fakemews.png" style="width:100%" />
      <q-select outlined v-model="selectedItem" :options="properties" label="Choose Hotel" option-label="title"
        option-value="propertyCode" />

      <div class="q-pa-lg"></div>
      <q-btn :loading="loading" size="lg" flat style="background-color: #fc5e58; border-radius: 0.75rem;"
        :disabled="selectedItem == null" @click="post">
        Book a room!
      </q-btn>


    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import properties from "../data/properties.json"

const selectedItem = ref();

const loading = ref<boolean>(false)

const post = () => {
  console.log('POSTING')
  console.log(selectedItem.value)
  const payload =  JSON.stringify({ property: selectedItem.value.propertyCode });
  console.log(payload)
  loading.value = true;
        //https://strawbeat-server.onrender.com/event
  fetch('https://strawbeat-server.onrender.com/event', {
    method: 'POST',   // Specify the method
    headers: {
      // Content-Type may need to be specified, depending on the API
      'Content-Type': 'application/json'
    },
    body: payload // Convert the JavaScript object to a JSON string
  })
    .then(response => {
      loading.value = false;
      console.log('success')
    })  // Parsing the JSON response
    .catch((error) => {
      console.error('Error:', error);  // Handle errors
      loading.value = false;

    });

}


onMounted(async () => {
  console.log(properties)
})

</script>
<style></style>
