import React, { useState } from "react";
//import { v4 as uuid } from "uuid";
//import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks/useAxios";
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random.
or remove a card*/

function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  //const [cards, setCards] = useState([]); // list of cards
  //const addCard = async () => { // add a new card at random
   // const response = await axios.get(
   //   "https://deckofcardsapi.com/api/deck/new/draw/"
   // );
  //  setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  //};
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {}; 

export default CardTable;
