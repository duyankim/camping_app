import { SEND_GEO } from "../_actions/types";

const initialState = {
  mapX: 127.3884379,
  mapY: 35.9829185
}

export default const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_GEO:
      return { ...state, mapX: state.mapX, mapY: state.mapY };

    default:
      return state;
  }
}

