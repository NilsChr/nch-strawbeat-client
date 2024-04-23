import { defineStore } from "pinia";

export interface Marker {
  id?: number;
  property: string;
  coords: number[];
  type: string;
}

export type RootState = {
  test: string;
  idStore: number;
  markers: Marker[];
  chartMaster: Map<string, number>;
  chartLabels: string[];
  chartData: number[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      test: "",
      markers: [],
      idStore: 1,
      chartMaster: new Map(),
      chartData: [],
      chartLabels: [],
    } as RootState),

  actions: {
    addMarker(marker: Marker) {
      marker.id = this.idStore++;
      this.markers.push(marker);
      let that = this;
      setTimeout(() => {
        that.markers = that.markers.filter((m) => m.id !== marker.id);
      }, 4000);
    },
    recalculate() {
      let out = [];
      for (const [key, value] of this.chartMaster.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
        out.push({property: key, bookings: value})
      }
      out = out.sort((a,b) => {return b.bookings - a.bookings})
      console.log(out)
      this.chartLabels = out.map(m => {return m.property})
      this.chartData = out.map(m => {return m.bookings})
    },

  },
});
