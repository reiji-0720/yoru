import Vue from 'vue';
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main';

Vue.use(VueGoogleMaps, {
 load: {
   key: `AIzaSyC6dMi8rEq5dX2hdjGZCyofHdOvuZPrwBI`,
   libraries: 'places',
 },
}); 