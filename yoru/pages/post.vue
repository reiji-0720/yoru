<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-col class="pb-0" cols="1"><v-spacer></v-spacer></v-col>
      <v-col class="pl-0 pb-0" cols="8"><h1>Details</h1></v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12"
        ><v-carousel height="230px" style="border-radius: 15px;">
          <v-carousel-item
            v-for="i in 5"
            :key="i"
            :src="item.img"
          ><v-btn class="ma-2" fab x-small color="#FF575F"><v-icon color="#ffffff">mdi-minus</v-icon></v-btn></v-carousel-item>
          <v-carousel-item
          ><v-btn height="100%" width="100%" color="#FF575F"><v-icon color="#ffffff" x-large>mdi-image-multiple</v-icon></v-btn></v-carousel-item></v-carousel
      ></v-col>
    </v-row>
    <v-fade-transition>
        <v-overlay v-show="showMap" opacity="0.8" z-index="3">
            <v-row justify="center">
                <v-col cols="12">
                    <v-row>
                        <v-col cols="1"><v-spacer></v-spacer></v-col>
                        <v-col cols="10" class="pt-4 px-0">
                            <v-card class="mb-7" :key="i" color="#30444E" rounded="xl" flat>
                                <v-row>
                                    <v-col cols="1"><v-spacer></v-spacer></v-col>
                                    <v-col cols="10" class="pt-4 px-0">
                                        <GmapMap
                                        :center="item.position"
                                        :zoom="12"
                                        map-type-id="terrain"
                                        style="width: auto; height: 230px;"
                                        >
                                            <GmapMarker
                                            :key="index"
                                            :position="item.position"
                                            :clickable="true"
                                            :draggable="true"
                                            @click="center=item.position"
                                            />
                                        </GmapMap>
                                    </v-col>
                                    <v-col cols="1"><v-spacer></v-spacer></v-col>
                                </v-row>
                                <v-row justify="center">
                                    <v-card-subtitle
                                    class="pt-0"
                                    >Hold the spot to pin</v-card-subtitle
                                    >
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="1"><v-spacer></v-spacer></v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn color="#FF575F" style="text-transform: none" v-bind="attrs" @click="showMap = !showMap">Close</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-overlay>
    </v-fade-transition>

    <v-row justify="center">
        <v-col cols="12">
            <v-card class="mb-7" :key="i" color="#30444E" rounded="xl" flat>
                <v-row>
                    <h2 class="ml-8 mt-3">Info</h2>
                </v-row>
                <v-row>
                    <v-text-field class="mx-9 mb-3" color="#3DD598" background-color="#30444E" label="Name" flat hide-details></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field class="mx-9" color="#3DD598" background-color="#30444E" label="Address" flat hide-details></v-text-field>
                </v-row>
                <v-row justify="center">
                    <v-card-subtitle>or</v-card-subtitle>
                </v-row>
                <v-row justify="center" class="pb-3">
                    <v-btn color="#3DD598" style="text-transform: none" v-bind="attrs" @click="showMap = !showMap">Choose from map</v-btn>
                    
                </v-row>
            </v-card>
        </v-col>
    </v-row>

    

    <v-row justify="center">
      <v-btn color="#FFC542" style="text-transform: none">Register</v-btn>
    </v-row>
  </v-container>
</template>

<style>
  .vue-map {
    border-radius: 15px 15px 15px 15px;
  }
  .v-overlay__content {
      width: 1000px;
  }
</style>

<script>
export default {
  data() {
    return {
      star: 0,
      password: "Password",
      showMap: false,
      screenWidth: window.innerWidth,
      item: {
        img: "/photo.png",
        title: "熱海 サンビーチ",
        address: "静岡県 熱海市",
        distance: "52km",
        star: "4.0",
        bookmark: "false",
        position: { lat: 35.098288631423976, lng: 139.07673912046056 }
      },
    };
  }
};
</script>
