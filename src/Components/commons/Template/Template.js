import React, {Fragment} from 'react';
import {Header} from '../Header';

const Template = ({children}) => (
    <Fragment>
        <Header/>
        {...children}
    </Fragment>
);

export default Template;
