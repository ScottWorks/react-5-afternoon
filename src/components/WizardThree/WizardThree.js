import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProp } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class WizardThree extends Component {
  render() {
    const { updateProp } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p> What property are you looking to use the loan on? </p>
          <br />
          <div className="row">
            <Link to="/wFour">
              <button
                value="primaryHome"
                onClick={(event) => updateProp(event.target.value)}
              >
                Primary Home
              </button>
            </Link>
            <Link to="/wFour">
              <button
                value="rentalProperty"
                onClick={(event) => updateProp(event.target.value)}
              >
                Rental Property
              </button>
            </Link>
            <Link to="/wFour">
              onClick={(event) => updateProp(event.target.value)}
              <button value="secondaryHome" onClick={this.props.propToBeUsedOn}>
                Secondary Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  const { propToBeUsedOn } = state;
  return {
    propToBeUsedOn
  };
}

export default connect(mapStateToProp, { updateProp })(WizardThree);
