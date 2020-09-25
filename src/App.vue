<template>
  <v-app>
    <app-bar @click="drawer = !drawer"></app-bar>
    <side-bar :model="drawer"></side-bar>

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
</template>

<script>
import AppBar from './components/layout/AppBar.vue';
import SideBar from './components/layout/SideBar.vue';

export default {
  components: {
    AppBar,
    SideBar,
  },
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
  }),

  created() {
    // this.$vuetify.theme.dark = true;
  },
};
</script>
