import {createAction, handleActions} from 'redux-actions';
import {is, Map} from 'immutable';

const CHANGE_INPUT = 'login/CHANGE_INPUT';
const LOGIN = 'login/LOGIN';

export const changeInput = createAction(CHANGE_INPUT);
export const login = createAction(LOGIN);

const initState = Map({
   inputForm:Map({
      id:'',
      pw:''
   }),
    adminAccount:Map({
        id:'admin',
        pw:'1234'
    }),
    isLogined:false
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload.data;
        return state.setIn(['inputForm',name],value);
    },
    [LOGIN]: (state, action) => {
        const isSuccessed = state.get('inputForm','id') === state.get('adminAccount','id') && state.get('inputForm','pw') === state.get('adminAccount','pw');
        return state.set('isLogined',isSuccessed);
    }
},initState);