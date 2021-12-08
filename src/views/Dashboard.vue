<template>
  <div>
    <v-app-bar app color="dark lighten-5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 350px"> Image Upload </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="dark" class="mr-2 black--text" @click="home">
        <v-icon> mdi-home-variant</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-1 transparent"
            @click="userProfile"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn color="dark" class="mr-2 black--text" @click="updateProfile">
        <v-icon> mdi-update</v-icon>
      </v-btn>

      <v-btn color="dark" class="black--text" @click="logout"> Logout </v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <h3>CATEGORIES</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-content @click="jeweleryItems">
          <v-list-item-title>Jewelery Item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-content @click="menCategory">
          <v-list-item-title>Men Category</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-content @click="womenCategory">
          <v-list-item-title>Women Catergory</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line link>
        <v-list-item-content @click="electronicItems">
          <v-list-item-title>Electonic Items</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer> -->
    <v-card min-height="100vh">
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" dark v-bind="attrs" v-on="on">
              Open Persistent
            </v-btn>
          </template>
          <v-sheet class="text-center" height="350px">
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              close
            </v-btn>
            <div class="py-3">
              <Dropzone />
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </v-card>
  </div>
</template>

<script>
import Dropzone from '../components/Dropzone.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    sheet: false,
    drawer: false,
    group: null,
  }),
  components: {
    Dropzone,
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
