import {FETCH_WEATHER} from "../actions/index";

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // NOT!!! state.push(action.payload.data);
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }



  return state;
}
