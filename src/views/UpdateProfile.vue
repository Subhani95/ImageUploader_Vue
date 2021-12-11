<template>
  <v-app class="main">
    <v-container>
      <v-row align="center" justify="center">
        <!-- <v-col cols="12" sm="10" class="mb-4"> -->
        <v-card class="elevation-24 mt-10 card" width="40%">
          <v-window>
            <!-- <v-row> -->
            <!-- <v-col cols="12" md="6" class="main"> -->
            <v-card-text class="mt-12">
              <h2 class="text-center mb-4"><i>Update Account</i></h2>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8">
                  <v-form
                    class="form pa-8 rounded"
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      prepend-inner-icon="mdi-account-outline"
                      hint="minimum 3 characters"
                      placeholder="Full Name"
                      :rules="fullnameRules"
                      v-model="user.name"
                      label=" Full Name"
                      outlined
                      dense
                      color="blue"
                      aria-autocomplete="false"
                    ></v-text-field>
                    <v-text-field
                      prepend-inner-icon="mdi-battery-outline"
                      hint="minimum 3 characters"
                      placeholder="Age"
                      :rules="ageRules"
                      v-model="user.age"
                      label=" Age"
                      outlined
                      dense
                      color="blue"
                      aria-autocomplete="false"
                    ></v-text-field>
                    <v-text-field
                      placeholder="Email"
                      prepend-inner-icon="mdi-email-outline"
                      hint="abc@gmail.com"
                      ref="email"
                      :rules="emailRules"
                      v-model="user.email"
                      label="Email"
                      outlined
                      dense
                      color="blue"
                      aria-autocomplete="false"
                    ></v-text-field>
                    <v-file-input
                      prepend-icon="mdi-camera"
                      v-model="user.file"
                      @change="captureImage"
                      required
                      solo
                      placeholder="Upload Profile"
                    >
                    </v-file-input>
                    <v-btn
                      tile
                      outlined
                      black
                      elevation="2"
                      @click="updateuser"
                      block
                      class="btn"
                      ><i>Update</i></v-btn
                    >
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
            <!-- </v-col> -->
            <!-- <v-col cols="12" md="6" class="white rounded-md" justify="center">
                <v-img
                  alt="Vuetify Name"
                  contain
                  src="../assets/camera.jpg"
                  width="1638px"
                  height="auto"
                />
              </v-col> -->
            <!-- </v-row> -->
          </v-window>
        </v-card>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import {
  fullnameRules,
  emailRules,
  passwordRules,
  ageRules,
} from '../Constant/constant'
export default {
  name: 'UpdateProfile',
  data() {
    return {
      fullnameRules: fullnameRules,
      emailRules: emailRules,
      passwordRules: passwordRules,
      ageRules: ageRules,
      valid: true,
      user: {
        name: '',
        email: '',
        // password: '',
        age: '',
        file: '',
      },
      // showRule: false,
      registerUser: [],
    }
  },
  mounted() {
    this.$store.dispatch('profile')
    this.registerUser = JSON.parse(localStorage.getItem('Users'))
    this.user.name = this.registerUser.name
    this.user.age = this.registerUser.age
    this.user.email = this.registerUser.email
    this.user.file = this.registerUser.file
  },
  methods: {
    homePage() {
      this.$router.push({ name: 'Signin' })
    },
    updateuser() {
      this.$store.dispatch('updateuser', this.user)
    },
    captureImage(event) {
      console.log(event)

      let get = this
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        function () {
          get.user.file = reader.result
        },
        false
      )
      reader.readAsDataURL(event)
    },
  },
}
</script>
<style scoped>
/* .main {
  background-image: url('../assets/cover.jpg');
  background-size: cover;
} */
.card {
  opacity: 0.5;
}
</style>
