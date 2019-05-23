import Vue from 'vue'

const initialState = () => ({
  experience: {
    title: '',
    items: []
  }
})

export const state = initialState

export const getters = {

}

export const mutations = {
  setItem (state, { key, value }) {
    Vue.set(state, key, value)
  }
}

export const actions = {
  fetch ({ commit }) {
    const query = `*[_type == 'experienceResume' && _id == 'resume-experience'][0]`
    return this.app.$sanity.fetch(query)
      .then(res => {
        commit('setItem', { key: 'experience', value: res })
      })
  }
}
