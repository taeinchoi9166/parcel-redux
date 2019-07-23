import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';

const GET_PHOTO_LIST = 'gallery/GET_PHOTO_LIST';
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
      1:{ title:'1 test', photoURL:'/'}
   }),
   curPage:1,
   totalItem:20,
   cntPerPage:3,
   totalPage:null,
   firstPage:1,
   lastPage:3,
   itemId:null,
    item:null
});

export default handleActions({
    [INIT]: (state) => {
        const [totalItem, cntPerPage] = [state.get('totalItem'), state.get('cntPerPage')];
        return state.set('totalPage',Math.ceil((parseFloat(totalItem+".0")/cntPerPage)));
    },
    [GET_PHOTO_ITEM]: (state, action) => {
        const {id} = action.payload;
        return state.set('itemId',id).set('item',state.getIn(['list',id]));
    },
    [MOVE_TO_PREV]: (state) => {
        const curPage = state.get('curPage');
        return curPage > 1 ? state.set('curPage', curPage - 1) : state;
    },
    [MOVE_TO_NEXT]: (state) => {
        const [curPage, totalPage] = [state.get('curPage'), state.get('totalPage')];
        return curPage < totalPage ? state.set('curPage', curPage + 1) : state;
    }
},initState);