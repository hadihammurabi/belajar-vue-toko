<template>
  <v-app v-if="toko">
    <operational-app-bar @click="drawer = !drawer"></operational-app-bar>
    <operational-side-bar :model="drawer"></operational-side-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <v-app v-else>
    <toko-app-bar @click="drawer = !drawer"></toko-app-bar>
    <toko-side-bar :model="drawer"></toko-side-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import OperationalAppBar from './components/layout/operational/AppBar.vue';
import OperationalSideBar from './components/layout/operational/SideBar.vue';

import TokoAppBar from './components/layout/toko/AppBar.vue';
import TokoSideBar from './components/layout/toko/SideBar.vue';

export default {
  components: {
    OperationalAppBar,
    OperationalSideBar,
    TokoAppBar,
    TokoSideBar,
  },
  props: {
    source: String,
  },

  data: () => ({
    toko: null,
    drawer: null,
  }),

  created() {
    // this.$vuetify.theme.dark = true;
    if (!this.toko) {
      this.$router.push({ name: 'Toko' });
    }

    this.$store.dispatch('toko/insert', {
      nama: 'Jaya Abadi',
      deskripsi: 'Toko bangunan yang menjual sayuran.',
    });
    this.$store.dispatch('toko/insert', {
      nama: 'Maju Jaya',
      deskripsi: 'Toko sayuran yang menjual perlengkapan bangunan.',
    });
  },
};
</script>
