import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Main from './Main';

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

