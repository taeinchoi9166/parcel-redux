import React, {Fragment} from 'react';
import {Header} from '../Header';

const Template = ({children}) => (
    <Fragment>
        <Header/>
        <section>
            {...children}
        </section>
    </Fragment>
);

export default Template;
