export const state = () => ({
  counter: 0,
  perSecond: 0,
  perClick: 1,
});

export const mutations = {
  INCREMENT_COUNT(state, value){
    state.counter += value;
  },
  INCREMENT_PER_SECOND(state, value){
    state.perSecond += value;
  },
  REMOVE_COOKIES(state, cost){
    state.counter -= cost;
  },
  ADD_PER_CLICK(state, value){
    state.perClick += value;
  }
};
export const actions = {
  increment({commit}, value){
    commit('INCREMENT_COUNT', value);
  },
  addToCPS({commit}, cps){
    commit('INCREMENT_PER_SECOND', cps);
  },
  buyItem({commit}, cost){
    commit('REMOVE_COOKIES', cost);
  },
  addPerClick({commit}, value){
    commit('ADD_PER_CLICK', value);
  }
}
