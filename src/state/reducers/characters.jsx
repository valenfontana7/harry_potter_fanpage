import { GET_CHARACTERS } from "../constants/characters";

const initialState = {
  list: [],
};

export default function characters(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { list: action.payload };
    default:
      return state;
  }
}
