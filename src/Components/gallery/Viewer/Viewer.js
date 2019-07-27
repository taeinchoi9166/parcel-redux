import React from 'react';
import {Link} from 'react-router-dom';
import './Viewer.scss';

const Viewer = ({url,page,onQuit}) => (
    <div className="viewer">
        <Link to={'/gallery/'+page} onClick={onQuit}>&times;</Link>
        <div className="bg"></div>
        <img src={url} alt=""/>
    </div>
);

export default Viewer;