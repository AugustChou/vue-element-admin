const state = {
  memoryList: []
}

const mutations = {
  ADD_ERROR_LOG: (state, list) => {
    state.memoryList.push(list)
  }
}

const actions = {
  addMemoryList({ commit }, list) {
    console.log('addMemoryList')
    commit('ADD_ERROR_LOG', list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

