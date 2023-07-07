import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      let copy3 = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });
      return {
        ...state,
        myFavorites: copy3,
      };
    case ORDER:
      let copy4 = state.allCharacters.sort((a, b) => {
        return payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: copy4,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
