import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV:
      let copy1 = state.allCharacters;
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters: copy1,
      };
    case REMOVE_FAV:
      let copy2 = state.myFavorites.filter(
        (character) => character.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: copy2,
      };
    case FILTER:
      let copy3 = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: copy3,
      };

    case ORDER:
      let copy4 = state.allCharacters;

      let order = copy4.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: order,
      };

    default:
      return state;
  }
};

export default rootReducer;
