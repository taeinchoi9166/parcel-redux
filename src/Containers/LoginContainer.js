import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from '../store/modules/login';
import {LoginPanel} from '../Components/login/LoginPanel';
import {Redirect} from "react-router";

class LoginContainer extends Component{
    constructor(props){
        super(props);
        const {LoginActions} = this.props;
        this.onChangeId = (e) => {
           LoginActions.changeInput({name:'id',value:e.target.value});
        }
        this.onChangePw = (e) => {
            LoginActions.changeInput({name:'pw',value:e.target.value});
        }
        this.onLogin = () => {
            LoginActions.login();
        }
    }
    render() {
        return(
            <Fragment>
                <LoginPanel onLogin={this.onLogin} onChangeId={this.onChangeId} onChangePw={this.onChangePw} inputId={this.props.inputId} inputPw={this.props.inputPassword}/>
                { this.props.isLogined && <Redirect to={'/'}/>}
            </Fragment>
        );
    }
}

export default connect(
    (state) => {
        console.log(state);
        return {
            inputId:state.login.getIn(['inputForm','id']),
            inputPassword:state.login.getIn(['inputForm','id']),
            isLogined:state.login.get('isLogined')
        }
    },
    (dispatch) => ({
        LoginActions:bindActionCreators( loginAction,dispatch)
    })
)(LoginContainer);