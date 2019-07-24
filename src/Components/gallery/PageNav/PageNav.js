import React from 'react';
import './PageNav.scss';
import {Link} from 'react-router-dom';

const PageNav = ({curPage,totalPage,onMovePrev,onMoveNext}) => {
    let _items = [];
    for(let p = curPage - 2; p <= curPage + 2; p++){
        if(p >= 1 && p <= totalPage) _items.push((<li key={p}><Link to={'/gallery/'+p}>{p}</Link></li>));
        else _items.push((<li key={p} className="empty"></li>));
    }


    console.log(curPage);
    return (
        <div className="page-nav">
            {curPage !== 1 && (<button onClick={onMovePrev}>&lt;</button>)}
            <ul>
                {_items}
            </ul>
            {curPage + 2 < totalPage && (<button onClick={onMoveNext}>&gt;</button>)}
        </div>
    );
};

export default PageNav;