<template>
  <v-app>
    <template v-if="$store.getters['toko/toko'].id">
      <operational-app-bar @click="drawer = !drawer"></operational-app-bar>
      <operational-side-bar :model="drawer"></operational-side-bar>
    </template>
    <template v-else>
      <toko-app-bar @click="drawer = !drawer"></toko-app-bar>
      <toko-side-bar :model="drawer"></toko-side-bar>
    </template>

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
    drawer: null,
  }),

  created() {
    // this.$vuetify.theme.dark = true;
    if (!this.$store.getters['toko/toko'].id) {
      this.$router.push({ name: 'Toko' });
    }

    this.$store.dispatch('toko/insert', {
      id: 1,
      nama: 'Jaya Abadi',
      deskripsi: 'Toko bangunan yang menjual sayuran.',
    });
    this.$store.dispatch('toko/insert', {
      id: 2,
      nama: 'Maju Jaya',
      deskripsi: 'Toko sayuran yang menjual perlengkapan bangunan.',
    });

    console.log(this.$store.getters);
  },
};
</script>
