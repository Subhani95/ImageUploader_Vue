<template>
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
                          solo
                          dense
                          color="blue"
                          aria-autocomplete="false"
                          class="width"
                        ></v-text-field>
                        <v-text-field
                          prepend-inner-icon="mdi-battery-outline"
                          hint="minimum 3 characters"
                          placeholder="Age"
                          :rules="ageRules"
                          v-model="user.age"
                          solo
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
                          solo
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field>
                        <v-text-field
                          :append-icon="showRule ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showRule ? 'text' : 'password'"
                          placeholder="Password"
                          v-model="user.password"
                          counter="8"
                          @click:append="showRule = !showRule"
                          hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                          :rules="passwordRules"
                          solo
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field>
                        <!-- <v-text-field
                          :append-icon="showRule ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showRule ? 'text' : 'password'"
                          placeholder="Confirm Password"
                          v-model="user.confirmpassword"
                          counter="8"
                          @click:append="showRule = !showRule"
                          hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                          :rules="confirmpasswordRules"
                          solo
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field> -->
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
                          @click="dataStore"
                          block
                          class="btn"
                          ><i>Sign Up</i></v-btn
                        >
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" class="light-grey rounded-md">
                <div style="text-align: center; padding: 180px 0">
                  <v-row justify="center">
                    <v-responsive justify="center">
                      <v-img
                        alt="Logo"
                        contain
                        min-width="150"
                        width="100"
                        src="../assets/logo1.png"
                        class="margin"
                      />
                    </v-responsive>
                  </v-row>
                  <v-card-text class="black--text">
                    <i class="mt-4">
                      <h3 class="text-center">Account Already Created?</h3>
                      <p>Please Click The SIGN IN Button</p></i
                    >
                  </v-card-text>
                  <div class="text-center">
                    <v-btn tile outlined black @click="signin"
                      ><i>SIGN IN</i></v-btn
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  fullnameRules,
  emailRules,
  passwordRules,
  ageRules,
  // confirmpasswordRules,
} from '../Constant/constant'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
Vue.use(VueAxios, axios)
export default {
  name: 'Signup',
  data() {
    return {
      valid: true,
      fullnameRules: fullnameRules,
      emailRules: emailRules,
      passwordRules: passwordRules,
      ageRules: ageRules,
      // confirmpasswordRules: confirmpasswordRules,
      showRule: false,
      user: {
        name: '',
        email: '',
        password: '',
        // confirmpassword: '',
        age: '',
        file: '',
      },
      // newUser: [],
    }
  },
  methods: {
    //method is created for storing data
    // url() {
    //   this.imageurl = URL.createObjectURL(this.image)
    // },
    signin() {
      this.$router.push({ name: 'Signin' })
    },
    dataStore() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signup', this.user)

        // localStorage.setItem('currentUser', JSON.stringify(this.user))
        this.$router.push({ name: 'Signin' })
        console.log(this.user)
      } else {
        console.log('Your account is not created')

        this.status = 401
      }
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
.main {
  background: linear-gradient(rgb(199, 197, 197), rgb(245, 245, 250));
}
.margin {
  margin-left: 35%;
}
</style>
