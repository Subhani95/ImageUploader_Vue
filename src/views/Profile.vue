<template>
  <v-app>
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
                            placeholder="Full Name"
                            v-model="user.name"
                            color="blue"
                            class="width"
                          />

                          <v-text-field
                            prepend-inner-icon="mdi-battery-outline"
                            placeholder="Age"
                            v-model="user.age"
                            solo
                            dense
                            color="blue"
                            aria-autocomplete="false"
                          ></v-text-field>
                          <v-text-field
                            placeholder="Email"
                            prepend-inner-icon="mdi-email-outline"
                            ref="email"
                            v-model="user.email"
                            solo
                            dense
                            color="blue"
                            aria-autocomplete="false"
                          ></v-text-field>
                          <!-- <v-file-input
                          prepend-icon="mdi-camera"
                          v-model="user.file"
                          @change="captureImage"
                          required
                          solo
                          placeholder="Upload Profile"
                        >
                        </v-file-input> -->
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
                          :src="user.file"
                          class="margin"
                        />
                      </v-responsive>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      valid: true,
      user: {
        name: '',
        age: '',
        email: '',
        file: '',
      },
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
  },
}
</script>
