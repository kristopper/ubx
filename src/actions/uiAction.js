import {ACTION_TYPES} from '../constants'
export default {
  onSearched(keyword) {
    console.log('searched', keyword);
    return dispatch => dispatch({ type: ACTION_TYPES.ui.onSearch , data: keyword})
  },
  onBlured(keyword) {
    console.log('blured',keyword);
    return dispatch => dispatch({ type: ACTION_TYPES.ui.onBlurSearch , data: keyword})
  },

  loadFlights(val){
    return dispatch => dispatch({ type: ACTION_TYPES.ui.loadFlights , data: val})
  },


};
