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
                        <v-file-input
                          placeholder="Upload Picture"
                          required
                          prepend-icon="mdi-camera"
                          label="Upload Picture"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                          block
                        ></v-file-input>
                        <v-btn
                          tile
                          outlined
                          black
                          elevation="2"
                          @click="storeData"
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
                    <v-responsive class="ml-15">
                      <v-img
                        alt="Vuetify Name"
                        contain
                        min-width="150"
                        src="../assets/logo1.png"
                        width="100"
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
} from '../Constant/constant'
export default {
  name: 'Signup',
  data() {
    return {
      valid: true,
      fullnameRules: fullnameRules,
      emailRules: emailRules,
      passwordRules: passwordRules,
      ageRules: ageRules,
      showRule: false,
      name: '',
      email: '',
      password: '',
      age: '',
      newUser: [],
    }
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem('newUser') || '[]')
  },
  methods: {
    //method is created for storing data
    storeData() {
      if (this.$refs.form.validate()) {
        let user = {
          name: this.name,
          age: this.age,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
        }
        if (
          this.newUser.some((a) => {
            return a.email == this.email
          })
        ) {
          this.$alert('Already Register Email')
        } else {
          this.newUser.push(user)
          localStorage.setItem('newUser', JSON.stringify(this.newUser))
          alert('Account Created Please Login!')
          this.$router.push({ name: 'Signin' })
          //after a successfull account created user will move to the login page
        }
      } else {
        alert('Check All fields fill or correct')
      }
    },
    signin() {
      this.$router.push({ name: 'Signin' })
    },
  },
}
</script>
<style scoped>
.main {
  background: linear-gradient(rgb(199, 197, 197), rgb(245, 245, 250));
}
</style>
