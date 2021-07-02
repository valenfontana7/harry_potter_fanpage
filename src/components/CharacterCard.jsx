import React from "react";
import C from "./styles/CharacterCard.module.css";

function CharacterCard({ character }) {
  return (
    <>
      <div className={C.cuadro_aviso}>
        <button
          onClick={(e) => {
            let element = document.getElementById(`carta-${character.name}`);
            if (element.style.transform === "rotateY(180deg)") {
              element.style.transform = "";
            } else if (element.style.transform === "") {
              element.style.transform = "rotateY(180deg)";
            }
          }}
          type="checkbox"
          className={C.card_btn}
        >
          ϟ
        </button>
        <div id={`carta-${character.name}`} className={C.carta}>
          <div className={C.cara}>
            <img
              src={character.image}
              alt="characterImage"
              className={C.image}
            />
          </div>
          <div className={C.cara + " " + C.detras}>
            <div className={C.character_details}>
              <span>
                <h1>{character.name ? character.name : "unknown"}</h1>
              </span>
              <span>
                <h1>Species: </h1>
                <h5>{character.species ? character.species : "unknown"}</h5>
              </span>
              <span>
                <h1>Status: </h1>
                <h5>{character.alive ? "alive" : "dead"}</h5>
              </span>
              <span>
                <h1>Date of Birth: </h1>
                <h5>
                  {character.dateOfBirth ? character.dateOfBirth : "unknown"}
                </h5>
              </span>
              <span>
                <h1>Gender: </h1>
                <h5>{character.gender ? character.gender : "unknown"}</h5>
              </span>
              <span>
                <h1>Ancestry: </h1>
                <h5>{character.ancestry ? character.ancestry : "unknown"}</h5>
              </span>
              <span>
                <h1>House: </h1>
                <h5>{character.house ? character.house : "unknown"}</h5>
              </span>
              <span>
                <h1>Patronus: </h1>
                <h5>{character.patronus ? character.patronus : "unknown"}</h5>
              </span>
              <span>
                <h1>Wand:</h1>
                <h5>
                  {character.wand.core && character.wand.wood
                    ? `${character.wand.core} ${character.wand.wood} ${
                        character.wand.length && character.wand.length + " cm"
                      }`
                    : "unknown"}
                </h5>
              </span>
              <span>
                <h1>Starring </h1>
                <h5>{character.actor ? character.actor : "unknown"}</h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
