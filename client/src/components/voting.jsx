import React from 'react';
import {connect} from 'react-redux';

import Winner from './winner';
import Vote from './vote';

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

const VotingContainer = connect(mapStateToProps)(Voting);

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export {
  Voting,
  VotingContainer
};
