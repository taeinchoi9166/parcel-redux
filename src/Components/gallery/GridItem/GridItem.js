import React from 'react';
import './GridItem.scss';
import {Link} from 'react-router-dom';

const GridItem = ({title,photoURL,_id,page,onView}) => (
    <div className="item">
        <div>{title}</div>
        <img src={photoURL} alt="alt"/>
        <Link to={'/gallery/'+page+'/view/'+_id} onClick={onView}>크게보기</Link>
    </div>
);

export default GridItem;