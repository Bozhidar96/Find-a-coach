import mutation from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userId: 'c3',
    };
  },
  mutation,
  actions,
  getters,
};