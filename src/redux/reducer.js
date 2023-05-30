import { REMOVE_FAV, ADD_FAV } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(payload)
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
