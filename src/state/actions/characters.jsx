import * as types from "../constants/characters";

export const getCharacters = () => async (dispatch) => {
  try {
    await fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => data)
      .then((final) =>
        dispatch({ type: types.GET_CHARACTERS, payload: final })
      );
  } catch (error) {
    console.log(error);
  }
};
