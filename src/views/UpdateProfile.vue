<template>
  <v-container>
    <v-row align="center" justify="center">
      <!-- <v-col cols="12" sm="10" class="mb-4"> -->
      <v-card class="elevation-24 mt-10" width="40%" color="grey">
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
                    v-model="name"
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
                    v-model="age"
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
                  <v-btn
                    tile
                    outlined
                    black
                    elevation="2"
                    @click="updateProfile"
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
      name: '',
      email: '',
      password: '',
      age: '',
      showRule: false,
      registerUser: [],
    }
  },
  created() {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser'))
    this.name = this.registerUser.name
    this.email = this.registerUser.email
    this.password = this.registerUser.password
    this.age = this.registerUser.age
  },
  methods: {
    updateProfile() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      this.index = this.newUser.findIndex((x) => x.email == this.e)
      this.newUser[this.index] = {
        email: this.email,
        name: this.name,
        password: this.password,
        age: this.age,
      }
      // localStorage.setItem('newUser', JSON.stringify(this.newUser))
      localStorage.setItem(
        'registerUser',
        JSON.stringify(this.newUser[this.index])
      )
      alert('Updated')
    },
    homePage() {
      this.$router.push({ name: 'Signin' })
    },
  },
}
</script>
