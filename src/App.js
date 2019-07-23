import React,{Component} from 'react';
import {Provider} from 'react-redux';
import config from "./store/config";
import {Header} from './Components/commons/Header';
import Home from "./page/home";
import {PageNav} from './Components/gallery/PageNav';

const store = config();

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <Home/>
                <PageNav curPage={10} totalPage={10}/>
            </Provider>
        );
    }
}

export default App;