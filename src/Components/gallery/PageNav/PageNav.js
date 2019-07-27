import React from 'react';
import './PageNav.scss';
import {Link} from 'react-router-dom';

export default ({curPage,totalPage,onMovePrev,onMoveNext,onMove}) => {
    let _items = [];
    if(curPage > totalPage) return;
    console.log(curPage,totalPage);
    for(let p = curPage - 2; p <= parseInt(curPage) + 2; p++){
        if(p >= 1 && p <= totalPage) _items.push((<li key={p}><Link to={'/gallery/'+p} onClick={onMove}>{p}</Link></li>));
        else _items.push((<li key={p} className="empty"></li>));
    }


    console.log(_items.length);
    return (
        <div className="page-nav">
            {curPage !== 1 && (<button onClick={onMovePrev}><Link to={'/gallery/'+(curPage - 1)} onClick={onMove}>&lt;</Link></button>)}
            <ul>
                {_items}
            </ul>
            {curPage + 2 < totalPage && (<button onClick={onMoveNext}><Link to={'/gallery/'+(curPage + 1)} onClick={onMove}>&gt;</Link></button>)}
        </div>
    );
};