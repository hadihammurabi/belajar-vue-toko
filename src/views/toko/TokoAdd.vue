<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Tambah Data Toko</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="save">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-list-item>
          <v-list-item-content>
            <v-text-field label="Nama" v-model="nama">
            </v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-textarea
              name="input-7-1"
              label="Deskripsi"
              v-model="deskripsi"
            ></v-textarea>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    nama: '',
    deskripsi: '',
  }),
  methods: {
    save() {
      this.$store.dispatch('toko/insert', {
        nama: this.nama,
        deskripsi: this.deskripsi,
      });
      this.dialog = false;
    },
  },
  watch: {
    dialog(to) {
      if (!to) {
        this.$router.push({ name: 'Toko' });
      }
    },
  },
};
</script>

<style>
</style>
