import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import C from "./styles/Characters.module.css";
import { getCharacters } from "../state/actions/characters";
import CharacterCard from "./CharacterCard.jsx";
import Gryffindor from "../gryffindor.jpeg";
import Slytherin from "../slytherin.jpeg";
import Ravenclaw from "../ravenclaw.jpeg";
import Hufflepuff from "../hufflepuff.jpeg";
import { Header } from "../components";
import Context from "../context/ThemeContext";
import Cc from "./styles/CharacterCard.module.css";
function Characters({ color }) {
  const { context } = useContext(Context);
  const dispatch = useDispatch();
  console.log(context);
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
        style={
          context.openMenu
            ? {
                backgroundImage: `url(${house})`,
                paddingTop: "40vh",
              }
            : {
                backgroundImage: `url(${house})`,
              }
        }
        className={C.list}
      >
        {characters.list.map((character) => (
          <div
            className={Cc.cuadro_aviso}
            key={character.name.split(" ").join("_")}
          >
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Characters;
