import React from 'react';
import {GridItem} from "../GridItem";

import './Grid.scss';

const Grid = ({list,curPage,onView}) => {
    const startCnt = (curPage-1)*4;
  const _comps = list.toList().slice(startCnt,startCnt+4);
  const _keys = list.keys();
  return(
        <ul className="grid">
          {
            _comps.map((item,idx) => {
                const _id = _keys.next().value;
                return (<li key={idx}><GridItem title={item.get('title')} photoURL={item.get('photoURL')} _id={_id} page={curPage} onView={onView}/></li>)
            })
          }
        </ul>
    )
};

export default Grid;