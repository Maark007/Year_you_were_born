import { createStore } from 'redux';

import { AGE_REDUCER } from './reducer';

const store = createStore(AGE_REDUCER);

export default store;
