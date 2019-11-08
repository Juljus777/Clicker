export const state = () => ({
  counter: 0,
  perSecond: 0,
});

export const mutations = {
  INCREMENT_COUNT(state, value){
    state.counter += value;
  },
  INCREMENT_PER_SECOND(state,value){
    state.perSecond += value;
  },
  REMOVE_COOKIES(state,cost){
    state.counter -= cost;
  },
  SET_ITEM_VALUE(state, cost){
    state.c
  }
};
export const actions = {
  increment({commit}, value){
    commit('INCREMENT_COUNT', value);
  },
  buyAutoClick({commit}, cps){
    commit('INCREMENT_PER_SECOND', cps);
  },
  buyItem({commit}, cost){
    commit('REMOVE_COOKIES', cost);
  }
}
