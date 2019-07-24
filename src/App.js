import React,{Component} from 'react';
import {Provider} from 'react-redux';
import config from "./store/config";
import {Header} from './Components/commons/Header';
import {Home, Gallery} from "./page";
import {withRouter, Route, BrowserRouter as Router} from 'react-router-dom';

const store = config();

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/gallery/:id'} component={Gallery}/>
                </Router>
            </Provider>
        );
    }
}

export default App;