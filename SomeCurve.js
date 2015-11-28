/**
  A component that renders an SVG curve on some data received by the
  calculator store
**/

'use strict';

const NUMBER_OF_CURVES = 200;

const React = require('react');
const Dispatcher = require('./dispatchers/Dispatcher.js');
const ActionTypes = require('./actions/ActionTypes');
const CurveStore = require('./stores/CurveStore.js');

const SomeCurve = React.createClass({
  getInitialState: function() {
    let curves = [];
    for (let i = 0; i < NUMBER_OF_CURVES; i++) {
      curves.push('');
    }
    return {curves: curves};
  },

  _curveCalculation: function() {
    let len = this.state.curves.length;
    let update = [];
    for (let i = 0; i < len; i++) {
      update.push(CurveStore.getCalculation(i) || '');
    }
    this.setState({curves: update});
  },

  componentDidMount: function() {
    let len = this.state.curves.length;
    CurveStore.addListener(this._curveCalculation);
    for (let i = 0; i < len; i++) {
      Dispatcher.dispatch(ActionTypes.CALCULATE_CURVE, {id: i});
    }
  },

  render: function() {
    const len = this.state.curves.length;
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push((
        <svg
          key={i}
          viewBox="0 0 500 10"
          preserveAspectRatio="none">
          <g>
            <path d={this.state.curves[i]} style={
                {
                  stroke: 'url(#temperature-gradient)',
                  strokeWidth: 10
                }
              } />
          </g>
        </svg>
      ));
    }
    return (
      <div>
        <h1>Some Curve</h1>
        {result}
      </div>
    );
  }
});

module.exports = SomeCurve;
