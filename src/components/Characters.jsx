import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import C from "./styles/Characters.module.css";
import { getCharacters } from "../state/actions/characters";
import CharacterCard from "./CharacterCard.jsx";
import Gryffindor from "../gryffindor.jpeg";
import Slytherin from "../slytherin.jpeg";
import Ravenclaw from "../ravenclaw.jpeg";
import Hufflepuff from "../hufflepuff.jpeg";
import { Header } from "../components";

function Characters({ color }) {
  const dispatch = useDispatch();
  const house =
    color && color === "rgb(151,45,48)"
      ? Gryffindor
      : color === "rgb(0,126,79)"
      ? Slytherin
      : color === "rgb(248,192,0)"
      ? Hufflepuff
      : color === "rgb(36,56,117)"
      ? Ravenclaw
      : null;
  const characters = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return characters.list ? (
    <>
      <Header color={color} />
      <div
        id="list"
        style={{
          backgroundImage: `url(${house})`,
        }}
        className={C.list}
      >
        {characters.list.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Characters;
