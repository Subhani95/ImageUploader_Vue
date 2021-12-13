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
            @click="profile"
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

    <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <h3>User Profile</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-content @click="profile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-content @click="update">
          <v-list-item-title>Update Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
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
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
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
  methods: {
    profile() {
      this.$router.push({ name: 'Profile' })
    },
    logout() {
      this.$store.dispatch('logOut')
      this.$router.push({ name: 'Signin' })
    },
  },
}
</script>
