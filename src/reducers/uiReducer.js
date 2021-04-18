import { ACTION_TYPES } from '../constants'


export default (
  state = {
    search: {
      focus: false,
      keyword: '',
    },
    flights: [],
    filteredFlights: [],
  },
  action) => {
  switch (action.type) {
    case ACTION_TYPES.ui.onSearch:
        let searchkey = action.data;

        let _filtered =  state.flights.filter(item=>{ return Object.values(item).map(function (value) {
          return String(value).toLowerCase();
          }).find(function (value) {
              return value.includes(searchkey.toLowerCase());
          });
        });

        return {
          ...state,
          search: {
            focus: true,
            keyword: action.data
          },
          filteredFlights: _filtered
        }


    case ACTION_TYPES.ui.onBlurSearch:

        let keyword = action.data;

        let __filtered =  state.flights.filter(item=>{ return Object.values(item).map(function (value) {
          return String(value).toLowerCase();}).find(function (value) {
              return value.includes(keyword.toLowerCase());
          });
        });

        return {
          ...state,
          search: {
            focus: false,
            keyword: action.data
          },
          filteredFlights: __filtered

        }

    case ACTION_TYPES.ui.loadFlights:
        return {
          ...state,
          flights: action.data,
          filteredFlights: action.data
        }

    default:
      return state
  }
}