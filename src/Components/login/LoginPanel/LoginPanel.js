import React from 'react';
import './LoginPanel.scss';

const LoginPanel = ({inputId,inputPw,onChangeId,onChangePw,onLogin}) => {
    return(
        <div className="panel">
            <h2>로그인</h2>
            <div className="input">
                <p>ID</p>
                <input type="text" onChange={onChangeId} value={inputId} defaultValue='' name={"id"}/>
            </div>
            <div className="input">
                <p>Password</p>
                <input type="text" onChange={onChangePw} value={inputPw} defaultValue='' name={"pw"}/>
            </div>
            <button type="button" onClick={onLogin}>Sign In</button>
        </div>
    );
}


export default LoginPanel;