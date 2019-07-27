import React from 'react';
import {GridItem} from "../GridItem";
import {ToJS} from 'immutable';

import './Grid.scss';

const Grid = ({list,curPage,onView}) => {
  const startCnt = (curPage-1)*4;
  const _items = list.toArray();
  for(let item of _items){
      item[0] = parseInt(item[0]);
  }

  const _comps = _items.sort((i,j) => {
      return i[0] - j[0];
  }).slice(startCnt,startCnt+4);

   // console.log(_comps);
  return(
        <ul className="grid">
          {
            _comps.map((item,idx) => {
               // console.log(item);
                 const [_item, _id] = [item[1], item[0]];

                 return (<li key={idx} data-id={_id}><GridItem title={_item.get('title')} photoURL={_item.get('photoURL')} _id={_id} page={curPage} onView={onView}/></li>)
            })
          }
        </ul>
    )
};

export default Grid;