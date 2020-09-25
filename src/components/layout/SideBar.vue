<template>
  <v-navigation-drawer v-model="active" app clipped>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <side-bar-menu-toko />

      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="red" dark>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import SideBarMenuToko from './SideBarMenuToko.vue';

export default {
  components: {
    SideBarMenuToko,
  },
  props: {
    model: Boolean,
  },
  data: () => ({
    active: null,
  }),
  watch: {
    model() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
</style>
