<template>
  <v-container class="container">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" class="mb-4">
        <v-card class="elevation-24 mt-10 maincard">
          <v-window>
            <v-row class="no-gutters">
              <v-col cols="12" md="6" class="elevation-5 main">
                <v-card-text class="mt-12">
                  <i> <h1 class="text-center mb-4">OTP</h1></i>
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                      <v-form
                        class="form pa-8 rounded"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                      >
                        <v-text-field
                          type="number"
                          step="any"
                          min="0"
                          ref="input"
                          :rules="[numberRule]"
                          v-model.number="user.token"
                          dense
                          outlined
                          label="OTP"
                          color="blue"
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
                        <v-text-field
                          :append-icon="showRule ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showRule ? 'text' : 'password'"
                          label="New Password"
                          counter="8"
                          hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                          @click:append="showRule = !showRule"
                          v-model="user.newpassword"
                          :rules="passwordRules"
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
                          @click="otp"
                          >OTP</v-btn
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
import { emailRules, passwordRules } from '../Constant/constant'
export default {
  name: 'Otp',
  data() {
    return {
      valid: true,
      emailRules: emailRules,
      passwordRules: passwordRules,
      showRule: false,
      user: {
        token: '',
        email: '',
        newpassword: '',
      },
    }
  },
  methods: {
    //
    otp() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('otp', this.user)
        // localStorage.setItem('currentUser', JSON.stringify(this.user))
        console.log(this.user)
      } else {
        console.log('Your account is not created')
        this.status = 401
      }
    },
  },
}
</script>
