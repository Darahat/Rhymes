const state = {
  count: 0,
};

const mutations = {
  decrement (state) {
    state.count--;
  },
  increment (state) {
    state.count++;
  },
  
};

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  openDrawer: ({commit}) => commit('openDrawer'),
  onCloseDrawerTap: ({commit}) => commit('onCloseDrawerTap'),
};

export default {
  state,
  mutations,
  actions,
};
