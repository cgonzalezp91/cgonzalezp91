import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        showNav: false
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    movediv: {

    }
  })
}

export default createStore