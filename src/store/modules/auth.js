import { AuthAPI } from '@/api/auth-api';
import { UserRoles } from '@/api/auth-api/roles';
import { DefaultAPIInstance, LoginAPIInstance } from '@/api';

export const auth = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || null,
    userRole: localStorage.getItem('userRole') || UserRoles.guest,
    userLogin: localStorage.getItem('userLogin') || null,
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setUserRole(state, userRole) {
      state.userRole = userRole
    },
    setUserLogin(state, userLogin) {
      state.userLogin = userLogin
      localStorage.setItem('userLogin', userLogin)
    },
    deleteUserLogin(state) {
      state.userLogin = null
      localStorage.removeItem('userLogin')
    },
    deleteToken(state) {
      state.token = null
      localStorage.removeItem('token')
    },
    deleteUserRole(state) {
      state.userRole = null
      localStorage.removeItem('userRole')
    }
  },
  actions: {
    onLogin({ commit }, { login, password }) {
      AuthAPI.login().then(res => {
        console.log(res)
        commit('setToken', res.data.request_token)
        commit('setUserRole', UserRoles.user)
        commit('setUserLogin', login)
        DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.data.request_token}`
      })
    },
    onLogout({ commit }) {
      commit('deleteToken')
      commit('deleteUserRole')
      commit('deleteUserLogin')
      delete DefaultAPIInstance.defaults.headers['authorization']
    }
  },
  getters: {
    getUserRole: (state) => state.userRole,
    getUserLogin: (state) => state.userLogin
  },
}