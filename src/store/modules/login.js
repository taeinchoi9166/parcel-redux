import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

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
        id:'',
        pw:''
    }),
    isLogined:false
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload;
        console.log(state.getIn(['inputForm','id']),state.getIn(['inputForm','pw']));
        return state.setIn(['inputForm',name],value);
    },
    [LOGIN]: (state, action) => {

        const isSuccessed = state.getIn(['inputForm','id']) === state.getIn(['adminAccount','id']) && state.getIn(['inputForm','pw']) === state.getIn(['adminAccount','pw']);
        console.log(isSuccessed);
        return state.set('isLogined',isSuccessed);
    }
},initState);