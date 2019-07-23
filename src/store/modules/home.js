import {createAction, handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable';

const INCREASE = 'home/INCREASE';
const DECREASE = 'home/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initState = Map({
   count:0
});

export default handleActions({
    [INCREASE]: (state, action) => {
        const count = state.get('count');
        return state.set('count', count + 1);
    },
    [DECREASE]: (state, action) => {
        const count = state.get('count');
        return state.set('count', count - 1);
    }
},initState);