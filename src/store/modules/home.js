import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const INCREASE = 'home/INCREASE';
const DECREASE = 'home/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initState = Map({
   count:1
});

export default handleActions({
    [INCREASE]: state => {
        const count = state.get('count');
        console.log(count);
        return state.set('count', count + 1);
    },
    [DECREASE]: state => {
        const count = state.get('count');
        return state.set('count', count - 1);
    }
},initState);