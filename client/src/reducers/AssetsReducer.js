import _ from "lodash";
import { FETCH_ASSETS, FETCH_ASSET, DELETE_ASSET } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_ASSET:
      return _.omit(state, action.payload);
    case FETCH_ASSET:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_ASSETS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
