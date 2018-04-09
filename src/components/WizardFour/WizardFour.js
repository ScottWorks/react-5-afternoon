import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFound } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class WizardFour extends Component {
  render() {
    const { updateFound } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Have you already found your new home?</p> <br />
          <div className="row">
            <Link to="/wFive">
              <button onClick={(event) => updateFound(event.target.value)}>
                Yes
              </button>
            </Link>
            <Link to="/wFive">
              <button onClick={(event) => updateFound(event.target.value)}>
                No{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { found } = state;
  return {
    found
  };
}

export default connect(mapStateToProps, { updateFound })(WizardFour);
