import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    token: '',
    refresh: '',
  },

  getters: {},

  mutations: {
    auth(state, authData) {
      state.email = authData.email
      state.token = authData.idToken
      state.refresh = authData.refreshToken
    },
  },

  actions: {
    // For signup data
    signup({ commit }, payload) {
      console.log(commit)
      axios
        // .post('http://192.168.88.221:8080/user/signup', {
        .post('https://imagehosting3.herokuapp.com/user/signup', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',

            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token, Authorization',

            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',

            'Access-Control-Allow-Credentials': true,

            'Content-Type': 'text/html; charset=utf-8',
          },
        })
        .then((response) => {
          console.log(response)
          localStorage.setItem('Users', JSON.stringify(response))
        })
        .catch((error) => console.log(error))
    },

    //login////////////////////////////////////////////////////////////////
    // For login data
    signin({ commit }, payload) {
      console.log(commit)
      axios
        .post('http://192.168.88.221:8080/user/login', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',

            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token, Authorization',

            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',

            'Access-Control-Allow-Credentials': true,

            'Content-Type': 'text/html; charset=utf-8',
          },
        })
        // .then((response) => response.json())
        .then((response) => {
          console.log(response)
          // commit('auth', authData)
          localStorage.setItem(
            'Token',
            JSON.stringify(response.data.access_token)
          )
        })
        .catch((error) => console.log(error))
    },

    //////////////////////////////////////////
    //forgetpassword
    password({ commit }, payload) {
      console.log(commit)
      axios
        .post('http://192.168.88.221:8080/ForgetPassword/forgetpassword', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',

            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token, Authorization',

            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',

            'Access-Control-Allow-Credentials': true,

            'Content-Type': 'text/html; charset=utf-8',
          },
        })
        .then((response) => {
          console.log(response)
          // commit('auth', authData)
          localStorage.setItem('Users', JSON.stringify(response))
        })
        .catch((error) => console.log(error))
    },
    //////////////////
    //logout
    logOut({ commit }) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('http://192.168.88.221:8080/user/logout')
        .catch((error) => {
          console.log(error.response)
        })
    },
    //logout//

    //otp
    otp({ commit }, payload) {
      console.log(commit)
      axios
        .post('http://192.168.88.221:8080/ForgetPassword/newpassword', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',

            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token, Authorization',

            'Access-Control-Allow-Methods':
              'GET, POST, PATCH, PUT, DELETE, OPTIONS',

            'Access-Control-Allow-Credentials': true,

            'Content-Type': 'text/html; charset=utf-8',
          },
        })
        .then((response) => {
          console.log(response)
          // commit('auth', authData)
          localStorage.setItem('Users', JSON.stringify(response))
        })
        .catch((error) => console.log(error))
    },

    //profile page
    profile({ commit }) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('http://192.168.88.221:8080/user/getprofile')
        .then((response) => {
          console.log(response.data[0])
          // commit('auth', authData)
          localStorage.setItem('Users', JSON.stringify(response.data[0]))
        })
        .catch((error) => {
          console.log(error.response)
        })
    },

    //updateprofile

    updateuser({ commit }, payload) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('http://192.168.88.221:8080/user/updateuser', { ...payload })
        .then((response) => {
          console.log(response.data[0])
          // commit('auth', authData)
          localStorage.setItem('Users', JSON.stringify(response.data[0]))
        })
        .catch((error) => {
          console.log(error.response)
        })
    },

    uploadimages({ commit }, payload) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('http://192.168.88.221:8080/image/uploadimage', { ...payload })
        .then((response) => {
          console.log(response.data[0])
          // localStorage.setItem('Users', JSON.stringify(response.data[0]))
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
  },
  modules: {},
})
