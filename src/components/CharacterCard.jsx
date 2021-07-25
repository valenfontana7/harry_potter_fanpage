import React from "react";
import C from "./styles/CharacterCard.module.css";

function CharacterCard({ character }) {
  return (
    <>
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
          <img src={character.image} alt="characterImage" className={C.image} />
        </div>
        <div className={C.cara + " " + C.detras}>
          <div className={C.character_details}>
            <span>
              <h1>{character.name ? character.name : "❓"}</h1>
            </span>
            <span>
              <h1>Species: </h1>
              <h5>
                {character.species === "human"
                  ? "🧑🏽"
                  : character.species === "werewolf"
                  ? "🐺"
                  : character.species === "cat"
                  ? "🐈"
                  : character.species
                  ? character.species
                  : "❓"}
              </h5>
            </span>
            <span>
              <h1>Status: </h1>
              <h5>{character.alive ? "🔥" : "☠️"}</h5>
            </span>
            <span>
              <h1>Date of Birth: </h1>
              <h5>{character.dateOfBirth ? character.dateOfBirth : "❓"}</h5>
            </span>
            <span>
              <h1>Gender: </h1>
              <h5>
                {character.gender === "male"
                  ? "♂️"
                  : character.gender === "female"
                  ? "♀️"
                  : "❓"}
              </h5>
            </span>
            <span>
              <h1>Ancestry: </h1>
              <h5>{character.ancestry ? character.ancestry : "❓"}</h5>
            </span>
            <span>
              <h1>House: </h1>
              <h5>
                {character.house === "Gryffindor"
                  ? `🔴`
                  : character.house === "Hufflepuff"
                  ? "🟡"
                  : character.house === "Slytherin"
                  ? "🟢"
                  : character.house === "Ravenclaw"
                  ? "🔵"
                  : "❓"}
              </h5>
            </span>
            <span>
              <h1>Patronus: </h1>
              <h5>
                {character.patronus === "horse"
                  ? "🐎"
                  : character.patronus === "wolf"
                  ? "🐺"
                  : character.patronus
                  ? character.patronus
                  : "❓"}
              </h5>
            </span>
            <span>
              <h1>Wand:</h1>
              <h5>
                {character.wand.core && character.wand.wood
                  ? `${character.wand.core} ${character.wand.wood} ${
                      character.wand.length && character.wand.length + " cm"
                    }`
                  : "❓"}
              </h5>
            </span>
            <span>
              <h1>Starring </h1>
              <h5>{character.actor ? character.actor : "❓"}</h5>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
