import React from 'react';
import {connect} from 'react-redux';

import Winner from './winner';

class Results extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getPair() {
    return this.props.pair || [];
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  render() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div class="voteCount">
                {this.getVotes(entry)}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
};

const ResultsContainer = connect(mapStateToProps)(Results)

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export {
  Results,
  ResultsContainer
};
