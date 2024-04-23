// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ImageLoader from './redux/ImageLoader';

function App() {
    return (
        <Provider store={store}>
            <ImageLoader src="https://source.unsplash.com/random?wallpapers" />
        </Provider>
    );
}

export default App;
