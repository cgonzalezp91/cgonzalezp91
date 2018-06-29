import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        showNav: false
    }
  })
}

export default createStore