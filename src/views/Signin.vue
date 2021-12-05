<template>
  <div class="wrapper">
    <section class="main">
      <v-container class="mt-15">
        <v-row class="mt-10">
          <v-col cols="12" lg="6" xl="6" xs="12" sm="12">
            <v-form class="form pa-8 rounded" ref="form">
              <v-text-field
                placeholder="Email"
                prepend-inner-icon="mdi-email-outline"
                hint="abc@gmail.com"
                ref="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                :append-icon="showRule ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showRule ? 'text' : 'password'"
                placeholder="Password"
                counter="8"
                @click:append="showRule = !showRule"
                hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                :rules="passwordRules"
                v-model="password"
              ></v-text-field>

              <v-btn
                class="white--text blue darken-4 pa-7 px-12"
                elevation="2"
                @click="registerUser"
                >Sign In</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
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
        this.$router.push({ name: 'Home' })
        localStorage.setItem('registerUser', JSON.stringify(this.registerUser))
      } else {
        console.log('Please Enter Correct Details') //package alerts are used so that user can get an alert if he registered or not
      }
    },
  },
}
</script>
<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}
.form {
  background-color: rgba(243, 241, 241, 0.9);
  border-color: black;
}
</style>
