<template>
  <div>
    <v-row>
      <v-col lg="10" md="10" sm="12">
        <h1>Data Toko</h1>
      </v-col>
      <v-col lg="2" md="2" sm="12">
        <v-btn color="primary" @click="$router.push({ name: 'TokoAdd' })">
          <v-icon>mdi-plus</v-icon>
          Tambahkan Data
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        v-for="(toko, index) in $store.getters['toko/tokos']"
        :key="index"
      >
        <v-card outlined style="cursor: pointer">
          <v-card-title class="primary--text">
            {{toko.nama}}
          </v-card-title>
          <v-card-subtitle>{{toko.deskripsi}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
