import React from 'react';
import './GridItem.scss';
import {Link} from 'react-router-dom';

const GridItem = ({title,photoURL,_id,page}) => (
    <div className="item">
        <div>{title}</div>
        <img src={photoURL} alt="alt"/>
        <Link to={'/gallery/'+page+'/view/'+_id}>크게보기</Link>
    </div>
);

export default GridItem;