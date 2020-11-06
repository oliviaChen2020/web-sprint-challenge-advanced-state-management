import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions';

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchSmurf();
  }, []);
  return (
    <div>
      <h2>Smurf List</h2>
      {props.isFetching ? <p>Loading Smurfs ...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.smurfs.map((smurf) => (
        <div className="list" key={smurf.id}>
          <h4>{`I'm ${smurf.name} Smurf`}</h4>
          <h4>{`I'm ${smurf.age} years old`}</h4>
          <h4>{`I'm ${smurf.height} tall`}</h4>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfList);
