import React,{Component} from 'react';
import {Provider} from 'react-redux';
import config from "./store/config";
import {Header} from './Components/commons/Header';

const store = config();

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <Header/>
            </Provider>
        );
    }
}

export default App;