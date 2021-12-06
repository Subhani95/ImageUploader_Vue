<!--<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" class="mb-4">
        <v-card class="elevation-24 mt-10">
          <v-window>
            <v-row>
              <v-col cols="12" md="6" class="main">
                <v-card-text class="mt-12">
                  <h2 class="text-center mb-4"><i>Create Your Account</i></h2>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                      <v-card>
                        <v-text class="text-center mt-4 display-1"
                          >User Fullname : {{ name }}</v-text
                        >
                      </v-card>
                      <v-card>
                        <v-text class="text-center mt-4"
                          >Age : {{ age }}</v-text
                        >
                      </v-card>
                      <v-card>
                        <v-text class="text-center mt-4"
                          >User Email : {{ email }}</v-text
                        >
                      </v-card>
                      <v-card>
                        <v-text class="text-center mt-4"
                          >User Password : {{ password }}</v-text
                        >
                      </v-card>
                      <div class="text-center mt-3">
                        <v-btn color="dark" class="mr-4" @click="homePage"
                          ><v-icon dark left block>
                            mdi-checkbox-marked-circle
                          </v-icon>
                          Shop More
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="white rounded-md" justify="center">
                <v-img
                  alt="Vuetify Name"
                  contain
                  src="../assets/password.jpg"
                  width="1638px"
                  height="auto"
                />
              </v-col>
            </v-row>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>-->
<template>
  <v-row justify="center" class="mt-15">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="light" dark v-bind="attrs" v-on="on"> Profile </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="light">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-list-item>
            <v-list-item-content>
              <v-snackbar :timeout="-1" :value="true" absolute shaped top>
                Name: {{ name }}
              </v-snackbar>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-snackbar :timeout="-1" :value="true" absolute shaped top>
                Email: {{ email }}
              </v-snackbar>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-snackbar :timeout="-1" :value="true" absolute shaped top>
                Age: {{ age }}
              </v-snackbar>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-snackbar :timeout="-1" :value="true" absolute shaped top>
                Password: {{ password }}
              </v-snackbar>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      valid: true,
      name: '',
      age: '',
      email: '',
      password: '',
      registerUser: [],
      dialog: false,
    }
  },
  created() {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser'))
    this.name = this.registerUser.name
    this.age = this.registerUser.age
    this.email = this.registerUser.email
    this.password = this.registerUser.password
    this.phoneNumber = this.registerUser.phoneNumber
  },
  methods: {
    homePage() {
      this.$router.push({ name: 'Signin' })
    },
  },
}
</script>
