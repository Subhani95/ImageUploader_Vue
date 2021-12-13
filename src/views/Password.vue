<template>
  <v-container class="container">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" class="mb-4">
        <v-card class="elevation-24 mt-10 maincard">
          <v-window>
            <v-row class="no-gutters">
              <v-col cols="12" md="6" class="elevation-5 main">
                <v-card-text class="mt-12">
                  <i> <h1 class="text-center mb-4">Forget Password</h1></i>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
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
                          v-model="user.email"
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          aria-autocomplete="false"
                        ></v-text-field>
                        <v-btn
                          tile
                          outlined
                          color="black"
                          elevation="2"
                          block
                          class="btn"
                          @click="passwordReset"
                          >Forget Password</v-btn
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
</template>

<script>
import { emailRules } from '../Constant/constant'
export default {
  name: 'Password',
  data() {
    return {
      valid: true,
      emailRules: emailRules,
      showRule: false,
      user: {
        email: '',
      },
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logOut')
      // localStorage.removeItem('Token')
      // alert('running')
    },
    passwordReset() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('password', this.user)
        this.$router.push({ name: 'Otp' })

        console.log(this.user)
      } else {
        console.log('Email is Invalid')
        this.status = 401
      }
    },
  },
}
</script>
