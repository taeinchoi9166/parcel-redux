import React,{Component} from 'react';
import {Provider} from 'react-redux';
import config from "./store/config";
import {Home, Gallery, Login} from "./page";
import {withRouter, Route, BrowserRouter as Router} from 'react-router-dom';

const store = config();

class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/login'} component={Login}/>
                    <Route exact path={'/gallery/:page'} component={Gallery}/>
                    <Route exact path={'/gallery/:page/view/:id'} component={Gallery}/>
                </Router>
            </Provider>
        );
    }
}

export default App;