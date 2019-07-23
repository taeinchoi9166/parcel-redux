import React from 'react';
import './PageNav.scss';

const PageNav = ({curPage,totalPage}) => {
    let _items = [];
    for(let p = curPage - 2; p <= curPage + 2; p++){
        if(p >= 1 && p <= totalPage) _items.push((<li>{p}</li>));
        else _items.push((<li className="empty"></li>));
    }
    return (
        <div className="page-nav">
            {curPage !== 1 && (<button>&lt;</button>)}
            <ul>
                {_items}
            </ul>
            {curPage + 2 < totalPage && (<button>&gt;</button>)}
        </div>
    );
};

export default PageNav;