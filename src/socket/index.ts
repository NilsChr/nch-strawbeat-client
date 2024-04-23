import { io } from "socket.io-client";
import { Marker, useMainStore } from "src/stores/mainStore";

// please note that the types are reversed
const urlTest = 'http://localhost:9999';
const urlProd= 'https://strawbeat-server.onrender.com';
const url = urlProd//process.env.NODE_ENV === 'production' ? urlProd : urlTest;
console.log("URL", url)
const socket = io(url, {transports: ['websocket'], upgrade: false});

let store:any = null;
setTimeout(() => {
    store = useMainStore()
}, 1000)


socket.on('connected', () => {
    console.log('connected')
})

socket.on('data', (data) => {
    console.log(data)
})

socket.on('event', (data: {property: string, coords: {latitude: number, longitude: number}, type: string}) => {
    console.log('EVENT')
    console.log(data)
    if(store === null) return;
    const marker: Marker = {
        property: data.property,
        coords: [data.coords.longitude,data.coords.latitude],
        type: data.type
    }
    console.log(marker)
    store.addMarker(marker)

    if (!store.chartMaster.get(data.property)) {
        store.chartMaster.set(data.property, 0);
    }
    store.chartMaster.set(data.property, store.chartMaster.get(data.property) +1);
    //store.recalculate();


    //console.log(data)
})




export default socket;
