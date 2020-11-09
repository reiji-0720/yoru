<template>
  <v-container fluid class="pt-0">
    <v-row class="logo" justify="center">
      <v-col class="pt-0" cols="3"><v-spacer></v-spacer></v-col>
      <v-col class="pt-0 px-0" cols="6">
        <v-img src="/YORU.png" />
      </v-col>
      <v-col class="pb-7" cols="2" align-self="end">
        <v-btn
          class="px-2"
          depressed
          small
          color="#3DD598"
          style="text-transform: none; border-radius: 8px"
          ><font size="1">Sign in</font></v-btn
        ></v-col
      >
      <v-col class="pt-0" cols="1"><v-spacer></v-spacer></v-col>
    </v-row>

    <v-row>
      <v-col class="pb-0" cols="1"><v-spacer></v-spacer></v-col>
      <v-col class="pl-0 pb-0" cols="8"><h1>Bookmark</h1></v-col>
      <v-col class="px-0 pb-0" cols="1" align-self="end">
        <v-menu
          transition="fade-transition"
          content-class="elevation-0"
          :close-on-content-click="false"
          max-width="500px"
          offset-y
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="#3DD598" v-bind="attrs" v-on="on">
              <v-img max-width="22px" max-height="22px" src="/search.png" />
            </v-btn>
          </template>
          <v-card
            class="pa-2"
            color="rgba(0, 0, 0, 0)"
            :width="windowWidth"
            height="100px"
          >
            <v-card class="px-2 py-1 mx-5" color="#30444E" elevation="6"
              ><v-card class="px-0" color="#2A3C44" flat
                ><v-text-field
                  class="pa-0 ma-0"
                  color="white"
                  background-color="#2A3C44"
                  height="23px"
                  hideDetails
                  flat
                  rounded
                ></v-text-field></v-card></v-card
          ></v-card>
        </v-menu>
      </v-col>
      <v-col class="pb-0" cols="1" align-self="end"
        ><v-menu
          class="pa-2"
          transition="fade-transition"
          content-class="elevation-5"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="#3DD598" v-bind="attrs" v-on="on">
              <v-img max-width="17px" max-height="17px" src="/filter.png" />
            </v-btn>
          </template>
          <v-card color="#30444E"
            ><v-row justify="center"
              ><v-btn color="#30444E" style="text-transform: none;" block small
                >Near</v-btn
              ></v-row
            ><v-divider color="white"></v-divider
            ><v-row justify="center"
              ><v-btn
                class="px-10"
                color="#30444E"
                style="text-transform: none;"
                block
                small
                >Populer</v-btn
              ></v-row
            ></v-card
          >
        </v-menu>
      </v-col>
      <v-col class="pb-0" cols="1"></v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <v-list color="#1F2E35">
          <v-card
            class="mb-7"
            v-for="(item, i) in items"
            :key="i"
            color="#30444E"
            rounded="xl"
            flat
          >
            <v-row
              ><v-col cols="1"><v-spacer></v-spacer></v-col
              ><v-col cols="10"><v-img :src="item.img"/></v-col
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
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showSearchBar: false,
      password: "Password",
      windowWidth: window.innerWidth,
      items: [
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        },
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        },
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        },
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        },
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        },
        {
          img: "/photo.png",
          title: "熱海 サンビーチ",
          address: "静岡県 熱海市",
          distance: "52km",
          star: "4.0",
          bookmark: "false"
        }
      ]
    };
  }
};
</script>
