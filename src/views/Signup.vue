<template>
  <div class="wrapper">
    <section class="main">
      <v-container class="mt-12">
        <v-row class="mt-10">
          <v-col cols="12" md="6">
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
                v-model="fullname"
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-battery-outline"
                hint="minimum 3 characters"
                placeholder="Age"
                :rules="ageRules"
                v-model="age"
              ></v-text-field>
              <v-text-field
                placeholder="Email"
                prepend-inner-icon="mdi-email-outline"
                hint="abc@gmail.com"
                ref="email"
                :rules="emailRules"
                v-model="email"
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
              ></v-text-field>
              <v-file-input
                accept="image/*"
                placeholder="Upload Picture"
                required
                append-icon="mdi-camera"
              ></v-file-input>

              <v-btn
                class="white--text blue darken-4 pa-7 px-12"
                elevation="2"
                @click="storeData"
                >Sign Up</v-btn
              >
            </v-form>
          </v-col>
          <v-col cols="12" md="6" class="column">
            <h1>Hello</h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
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
      fullName: '',
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
          fullName: this.fullName,
          userName: this.userName,
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
          this.$router.push({ name: 'Signin' }) //after a successfull account created user will move to the login page
        }
      } else {
        alert('Check All fields fill or correct')
      }
    },
  },
}
</script>
<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  /* overflow-y: hidden; */
}
.form {
  background-color: rgba(243, 241, 241, 0.9);
  border-color: black;
}
.column {
  background-color: rgba(243, 241, 241, 0.9);
}
.link {
  text-decoration: none;
}
</style>
