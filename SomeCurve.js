/**
  A component that renders an SVG curve on some data received by the
  calculator store
**/

const React = require('react');
const Dispatcher = require('./dispatchers/Dispatcher.js');
const ActionTypes = require('./actions/ActionTypes');
const CurveStore = require('./stores/CurveStore.js');

const SomeCurve = React.createClass({
  getInitialState: function() {
    return {curve: ''};
  },

  _curveCalculation: function() {
    const calcuation = CurveStore.getCalculation('abc') || '';
    this.setState({curve: calcuation});
  },

  componentDidMount: function() {
    CurveStore.addListener(this._curveCalculation);
    Dispatcher.dispatch(ActionTypes.CALCULATE_CURVE, {
      id: 'abc'
    });
  },

  render: function() {
    return (
      <div>
        <h1>Some Curve</h1>
        <svg
          width="100%"
          height="1000px"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none">
          <g>
            <path d={this.state.curve} style={
                {
                  stroke: 'url(#temperature-gradient)',
                  strokeWidth: 10
                }
              } />
          </g>
        </svg>
      </div>
    );
  }
});

module.exports = SomeCurve;
