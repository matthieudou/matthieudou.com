import { client } from '~/utils/sanityClient'

const initialState = () => ({
  layouts: {},
  currentLayout: 'default',
  pages: {},
  currentPage: ''
})

export const state = initialState

export const getters = {
  getCurrentLayout (state) {
    return state.layouts[state.currentLayout]
  },

  getCurrentPage (state) {
    return state.pages[state.currentPage]
  }
}

export const mutations = {
  addLayout (state, layout) {
    Object.assign(state.layouts, {
      [layout.id]: layout
    })
  },
  setCurrentLayout (state, id) {
    state.currentLayout = id
  },

  addPage (state, page) {
    Object.assign(state.pages, {
      [page.route]: page
    })
  },

  setCurrentPage (state, route) {
    state.currentPage = route
  }
}

export const actions = {
  async fetchLayout ({ commit, state }, id) {
    if (!state.layouts[id]) {
      const layout = await client.fetch(layoutQuery, { id })
      commit('addLayout', layout)
    }
    commit('setCurrentLayout', id)
  },

  async fetchPage ({ state, commit, dispatch }, route) {
    if (!state.pages[route]) {
      try {
        const page = await client.fetch(pageQuery, { route })
        if (!page) { return false }
        commit('addPage', page)
      } catch {
        return false
      }

      // dispatch('fetchLayout', page.pageOptions.layout)
    }
    commit('setCurrentPage', route)
    return true
  }
}

const layoutQuery = /* groq */ `
  *[_type == 'layout' && id == $id][0]
`

const pageQuery = /* groq */`
  *[_type == 'page' && route.current == $route] {
    ...,
    'route': route.current,
    'pageOptions': {
      ...pageOptions,
      'layout': pageOptions.layout->ids
    }
  }[0]
`
