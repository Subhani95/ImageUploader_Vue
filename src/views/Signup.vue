<template>
  <div class="wrapper">
    <section class="main">
      <v-container class="mt-12">
        <v-row class="mt-10">
          <v-col cols="12" lg="6" xl="6" xs="12" sm="12">
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
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
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
              <router-link to="/signin" class="link">
                <v-btn
                  class="white--text blue darken-4 pa-7 px-12"
                  elevation="2"
                  @click="submit"
                  >Sign Up</v-btn
                ></router-link
              >
            </v-form>
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
    this.newUser = JSON.parse(localStorage.getItem('users') || '[]')
  },
  methods: {
    //  For image upload
    // displayImg(event) {
    //   console.log(event)

    //   let store = this
    //   const reader = new FileReader()
    //   reader.addEventListener(
    //     'load',
    //     function () {
    //       store.user_img = reader.result
    //     },
    //     false
    //   )
    //   reader.readAsDataURL(event)
    // },

    // for validations
    submit() {
      if (this.$refs.form.validate()) {
        let user = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          age: this.age,
        }

        // duplication checkup

        if (
          this.newUser.some((e) => {
            return e.email == this.email
          })
        ) {
          console.log('duplicate data does not ')
        }
        //push in local storage
        else {
          this.newUser.push(user)
          localStorage.setItem('users', JSON.stringify(this.newUser))
          console.log('Your account has been successfully created')
          this.$router.push({ name: 'Signin' })
        }
      } else {
        console.log('Your account is not created')
        this.status = 401
      }
    },
    // login() {
    //   this.$router.push({ name: 'Signin' })
    // },
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
.link {
  text-decoration: none;
}
</style>
