import React from 'react';
import {connect} from 'react-redux';

import Winner from './winner';
import Vote from './vote';
import * as actionCreators from '../action-creators';

class Voting extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
};

const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export {
  Voting,
  VotingContainer
};
