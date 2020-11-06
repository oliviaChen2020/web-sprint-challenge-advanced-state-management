import {
  FETCH,
  SUCCESS,
  ERROR,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  smurfs: [],
  error: '',
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case ADD_SMURF:
      console.log(action);
      return {
        ...state,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
      };
    case ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smurfReducer;
