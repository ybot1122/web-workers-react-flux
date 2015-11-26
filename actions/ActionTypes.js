/**
  definition of actions that are dispatched  
**/

'use strict';

module.exports = {

  /** 
    {
      time: (number)
    } 
  **/
  UPDATE_CLOCK      : 'UPDATE_CLOCK',

  /** 
    {
      id: (string)
      data: (array of numbers)
    } 
  **/
  CALCULATE_CURVE   : 'CALCULATE_CURVE'

};