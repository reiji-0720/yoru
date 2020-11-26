<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-col class="pb-0" cols="1"><v-spacer></v-spacer></v-col>
      <v-col class="pl-0 pb-0" cols="8"><h1>Details</h1></v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12"
        ><v-carousel cycle height="230px" style="border-radius: 15px;">
          <v-carousel-item
            v-for="i in 5"
            :key="i"
            :src="item.img"
          ></v-carousel-item> </v-carousel
      ></v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mb-7" :key="i" color="#30444E" rounded="xl" flat>
          <v-row 
            ><v-col cols="1"><v-spacer></v-spacer></v-col
            ><v-col cols="10" class="pt-10 pb-5">
              <GmapMap
              :center="item.position"
              :zoom="16"
              map-type-id="terrain"
              style="width: auto; height: 230px;"
            ><GmapMarker
              :key="index"
              :position="item.position"
              :clickable="true"
              :draggable="true"
              @click="center=item.position"
            />
            </GmapMap></v-col
            ><v-col cols="1"><v-spacer></v-spacer></v-col
          ></v-row>

          <v-row>
            <v-col cols="1"><v-spacer></v-spacer></v-col
            ><v-col cols="7" class="py-0"
              ><v-card-title
                class="pa-0"
                v-text="item.title"
              ></v-card-title></v-col
            ><v-col class="py-0" cols="1" align-self="center"
              ><v-icon color="#FFBC25" medium>mdi-star</v-icon></v-col
            ><v-col align-self="center" class="pa-0" cols="3"
              ><v-card-subtitle
                class="py-0"
                v-text="item.star"
              ></v-card-subtitle
            ></v-col>
          </v-row>

          <v-row>
            <v-col cols="1"><v-spacer></v-spacer></v-col
            ><v-col cols="7" class="py-0"
              ><v-card-subtitle
                class="pa-0"
                v-text="item.address"
              ></v-card-subtitle></v-col
            ><v-col class="py-0" cols="1" align-self="center"
              ><v-icon color="#96A7AF" medium
                >mdi-map-marker-radius</v-icon
              ></v-col
            ><v-col cols="3" class="pa-0" align-self="center"
              ><v-card-subtitle
                class="py-0"
                v-text="item.distance"
              ></v-card-subtitle
            ></v-col>
          </v-row>

          <v-row class="pt-1 pb-3">
            <v-col cols="8"><v-spacer></v-spacer></v-col
            ><v-col class="py-0" cols="1" align-self="center"
              ><v-icon color="#96A7AF" medium
                >mdi-bookmark-outline</v-icon
              ></v-col
            ><v-col align-self="center" class="pa-0" cols="3"
              ><v-card-subtitle class="py-0"
                ><h6>
                  bookmark
                </h6></v-card-subtitle
              ></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" align-content="center">
        <v-card class="mb-7" :key="i" color="#30444E" rounded="xl" flat>
          <v-row
            ><v-col cols="1"><v-spacer></v-spacer></v-col
            ><v-col cols="10"><h1>Review</h1></v-col
            ><v-col cols="1"><v-spacer></v-spacer></v-col
          ></v-row>

          <v-row>
            <v-col cols="1"><v-spacer></v-spacer></v-col>
            <v-col v-if="star != 0" v-for="i in star" class="" cols="2" align-content="center"
              ><v-btn @click="star = i" icon
                ><v-icon color="#FFBC25" x-large>mdi-star</v-icon></v-btn
                ></v-col
              >
              <v-col v-for="i in 5 - star" class="" cols="2" align-content="center"
                ><v-btn @click="star = i + star" icon
                  ><v-icon color="#96A7AF" x-large>mdi-star</v-icon></v-btn
                ></v-col
              >
          </v-row>

          <v-row justify="center" class="py-3">
            <v-col cols="3"><v-spacer></v-spacer></v-col>
            <v-col cols="6"
              ><v-btn color="#3DD598" style="text-transform: none" block
                >Send</v-btn
              ></v-col
            >
            <v-col cols="3"><v-spacer></v-spacer></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .vue-map {
    border-radius: 15px 15px 15px 15px;
  }
</style>

<script>
export default {
  data() {
    return {
      star: 0,
      password: "Password",
      windowWidth: window.innerWidth,
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
