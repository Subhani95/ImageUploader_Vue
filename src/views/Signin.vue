<template>
  <v-container class="container">
    <v-row align="center" justify="center" class="no-gutters">
      <v-col cols="12" sm="10" class="mb-4">
        <v-card class="elevation-24 mt-10 maincard">
          <v-window>
            <v-row class="no-gutters">
              <v-col cols="12" md="6" class="elevation-5 main">
                <v-card-text class="mt-12">
                  <i> <h1 class="text-center mt-15">SIGN IN</h1></i>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" class="mt-15">
                      <v-form
                        class="form pa-8 rounded"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                      >
                        <v-text-field
                          placeholder="Email"
                          prepend-inner-icon="mdi-email-outline"
                          hint="abc@gmail.com"
                          ref="email"
                          :rules="emailRules"
                          v-model="email"
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field>
                        <v-text-field
                          :append-icon="showRule ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showRule ? 'text' : 'password'"
                          placeholder="Password"
                          v-model="password"
                          counter="8"
                          @click:append="showRule = !showRule"
                          hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                          :rules="passwordRules"
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field>
                        <small class="mb-5">forget password</small>
                        <v-btn
                          tile
                          outlined
                          color="black"
                          elevation="2"
                          @click="registerUser"
                          block
                          class="btn"
                          >Sign IN</v-btn
                        >
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="white rounded-md" justify="center">
                <v-img
                  alt="Vuetify Name"
                  contain
                  src="../assets/camera.jpg"
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
</template>

<script>
import { emailRules, passwordRules } from '../Constant/constant.js'
export default {
  name: 'Signin',
  data() {
    return {
      emailRules: emailRules,
      passwordRules: passwordRules,
      email: '',
      password: '',
      newUser: [],
      showRule: false,
    }
  },
  methods: {
    registerUser() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      console.log(this.newUser)
      this.registerUser = this.newUser.find((a) => {
        return a.email == this.email && a.password == this.password
      })
      if (this.registerUser) {
        this.$router.push({ name: 'Profile' })
        localStorage.setItem('registerUser', JSON.stringify(this.registerUser))
      } else {
        console.log('Please Enter Correct Details')
        //package alerts are used so that user can get an alert if he registered or not
      }
    },
    signup() {
      this.$router.push({ name: 'Signup' })
    },
  },
}
</script>
<style scoped>
.main {
  background: linear-gradient(rgb(199, 197, 197), rgb(245, 245, 250));
}
.maincard {
  background: linear-gradient(rgb(199, 197, 197), rgb(245, 245, 250));
}
</style>
