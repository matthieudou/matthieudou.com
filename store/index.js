const initialState = () => ({

})

export const state = initialState

export const getters = {

}

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('resume/fetch')
  }
}
