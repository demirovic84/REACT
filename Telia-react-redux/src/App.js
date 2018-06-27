import React, { Component } from 'react';
import "./App.css";
import ItemList from './components/ItemList';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <ItemList />
                </div>
            </Provider>
        )
    }
}

export default App;
