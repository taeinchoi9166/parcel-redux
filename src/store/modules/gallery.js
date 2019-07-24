import {createAction, handleActions} from 'redux-actions';
import {Map, fromJS} from 'immutable';

import p1 from '../../asset/images/p1.jpg';
import p2 from '../../asset/images/p2.jpg';
import p3 from '../../asset/images/p3.jpg';
import p4 from '../../asset/images/p4.jpg';
import p5 from '../../asset/images/p5.jpg';
import p6 from '../../asset/images/p6.jpg';

const GET_PHOTO_ITEM = 'gallery/GET_PHOTO_ITEM';
const MOVE_TO_PREV = 'gallery/MOVE_TO_PREV';
const MOVE_TO_NEXT = 'gallery/MOVE_TO_NEXT';
const INIT = 'gallery/INIT';

export const getPhotoItem = createAction(GET_PHOTO_ITEM);
export const moveToPrev = createAction(MOVE_TO_PREV);
export const moveToNext = createAction(MOVE_TO_NEXT);
export const init = createAction(INIT);

const initState = Map({
   list:fromJS({
        1:{ title:'1 test', photoURL:p1},
        2:{ title:'2 test', photoURL:p2},
        3:{ title:'1 test', photoURL:p3},
        4:{ title:'2 test', photoURL:p4},
        5:{ title:'1 test', photoURL:p5},
        6:{ title:'2 test', photoURL:p6},
        7:{ title:'1 test', photoURL:p1},
        8:{ title:'2 test', photoURL:p2},
        9:{ title:'1 test', photoURL:p3},
        10:{ title:'2 test', photoURL:p4},
        11:{ title:'1 test', photoURL:p5},
        12:{ title:'2 test', photoURL:p6},
        13:{ title:'1 test', photoURL:p1},
        14:{ title:'2 test', photoURL:p2},
        15:{ title:'1 test', photoURL:p3},
   }),
   curPage:1,
   totalItem:15,
   totalPage:null,
   firstPage:1,
   lastPage:3,
   itemId:null,
   item:null
});

export default handleActions({
    [INIT]: state => {
        const totalItem = state.get('totalItem');
        console.log(totalItem);
        return state.set('totalPage',Math.ceil((parseFloat(totalItem+".0")/4)));
    },
    [GET_PHOTO_ITEM]: (state, action) => {
        const {id} = action.payload;
        console.log(id);
        return state.set('itemId',id).set('item',state.getIn(['list',id]));
    },
    [MOVE_TO_PREV]: (state) => {
        const curPage = state.get('curPage');
        console.log(state);
        return curPage > 1 ? state.set('curPage', curPage - 1) : state;
    },
    [MOVE_TO_NEXT]: state => {
        const [curPage, totalPage] = [state.get('curPage'), state.get('totalPage')];
        console.log(state);
        return curPage < totalPage ? state.set('curPage', curPage + 1) : state;
    }
},initState);