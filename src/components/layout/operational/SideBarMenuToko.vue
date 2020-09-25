<template>
  <v-list-group prepend-icon="mdi-store" value="true">
    <template v-slot:activator>
      <v-list-item-title>Toko</v-list-item-title>
    </template>
    <v-list-item link v-for="(toko, index) in tokos" :key="index">
      <v-list-item-action> </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ toko.nama }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link>
      <v-list-item-action> </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          <v-icon>mdi-plus</v-icon>
          Tambahkan Data
          </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  data: () => ({
    tokos: [],
  }),
  mounted() {
    // this.tokos = [
    //   {
    //     nama: 'Maju Jaya',
    //   },
    //   {
    //     nama: 'Jaya Abadi',
    //   },
    // ];
  },
};
</script>

<style>
</style>
