// src/store/auth.js
import axios from 'axios'

const state = {
  user: null,
  token: null
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }
}

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/login', credentials)
      const token = response.data.token
      const user = response.data.user

      commit('SET_TOKEN', token)
      commit('SET_USER', user)
    } catch (error) {
      console.error('Login failed', error)
    }
  },
  logout({ commit }) {
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
  }
}

const getters = {
  isAuthenticated: (state) => !!state.token,
  user: (state) => state.user
}

export default {
  state,
  mutations,
  actions,
  getters
}
