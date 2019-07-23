import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.scss';

const Index = () => {
    return(
        <App/>
    );
};

const root = document.getElementById("app");
ReactDom.render(<Index/>,root);