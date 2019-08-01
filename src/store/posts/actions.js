import Vue from 'vue'
import { Loading } from 'quasar'

const setPosts = ({ commit }) => {
  Loading.show({
    delay: 300
  })
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v2/posts`)
      .then((response) => {
        commit('SET_POSTS', response.data)
        Loading.hide()
        resolve(response.data)
      })
      .catch((error) => {
        Loading.hide()
        console.erro(error)
        reject(error)
      })
  })
}

const setArtigo = ({ commit }, id) => {
  Loading.show({
    delay: 300
  })
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v2/posts/${id}`)
      .then((response) => {
        commit('SET_ARTIGO', response.data)
        Loading.hide()
        resolve(response.data)
      })
      .catch((error) => {
        Loading.hide()
        console.erro(error)
        reject(error)
      })
  })
}

export {
  setPosts,
  setArtigo
}
