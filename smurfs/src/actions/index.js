import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCH });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      dispatch({ type: SUCCESS, payload: response.data });
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR, payload: err.message });
      console.log(err.message);
    });
};

export const addSmurf = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return (dispatch) => {
    dispatch({ type: ADD_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ADD_ERROR, payload: err.message });
      });
  };
};
