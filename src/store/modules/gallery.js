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
const QUIT_VIEW = 'gallery/QUIT_VIEW';
const MOVE = 'gallery/MOVE';

export const getPhotoItem = createAction(GET_PHOTO_ITEM);
export const move = createAction(MOVE);
export const moveToPrev = createAction(MOVE_TO_PREV);
export const moveToNext = createAction(MOVE_TO_NEXT);
export const init = createAction(INIT);
export const quitView = createAction(QUIT_VIEW);

const list = {
    1:{ title:'1 test', photoURL:p1},
    2:{ title:'2 test', photoURL:p2},
    3:{ title:'1 test', photoURL:p3},
    4:{ title:'2 test', photoURL:p4},
    5:{ title:'1 test', photoURL:p5},
    6:{ title:'2 test', photoURL:p6},
    7:{ title:'1 test', photoURL:p1},
    8:{ title:'2 test', photoURL:p2},
    9:{ title:'1 test', photoURL:p3},
    10:{ title:'1 test', photoURL:p1},
    12:{ title:'2 test', photoURL:p2},
    13:{ title:'1 test', photoURL:p3},
    14:{ title:'2 test', photoURL:p4},
    15:{ title:'1 test', photoURL:p5},
    16:{ title:'2 test', photoURL:p6},
    17:{ title:'1 test', photoURL:p1},
    18:{ title:'2 test', photoURL:p2},
    19:{ title:'1 test', photoURL:p3},
    20:{ title:'1 test', photoURL:p1},
    21:{ title:'1 test', photoURL:p1},
    22:{ title:'2 test', photoURL:p2},
    23:{ title:'1 test', photoURL:p3},
    24:{ title:'2 test', photoURL:p4},
    25:{ title:'1 test', photoURL:p5},
    26:{ title:'2 test', photoURL:p6},
    27:{ title:'1 test', photoURL:p1},
    28:{ title:'2 test', photoURL:p2},
    29:{ title:'1 test', photoURL:p3},
}

const initState = Map({
   list:fromJS(list),
   curPage:1,
   totalItem:Object.keys(list).length,
   totalPage:Math.ceil(Object.keys(list).length/parseFloat(4+".0")),
   firstPage:1,
   lastPage:3,
   item:null
});

export default handleActions({
    [INIT]: state => {
        // const totalItem = state.get('totalItem');
        // console.log(Math.ceil((parseFloat(totalItem+".0")/4))+" "+state.get('totalPage'));
        // return state.set('totalPage',Math.ceil((parseFloat(totalItem+".0")/4)));
        return state;
    },
    [GET_PHOTO_ITEM]: (state, action) => {
        const {id} = action.payload;
        console.log(state.getIn(['list',id,'photoURL']));
        return state.set('item',state.getIn(['list',id]));
    },
    [MOVE]: (state, action) => {
        const {page} = action.payload;
        console.log(page);
        return state.set('curPage', page);
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
    },
    [QUIT_VIEW]: state => {
        console.log('quit');
        return state.set('item',null);
    }
},initState);