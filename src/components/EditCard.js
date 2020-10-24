import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { displayTemp, getBrand } from "../helpers/helpers";
import chip from "../assets/icons/chip.png";
import "../App.css";

// Page EditCard
const EditCard = ({ cards, setCards }) => {
  const { id } = useParams();
  const currentCard = cards.find((card) => card.cardId === +id);

  const [cardId, setCardId] = useState(currentCard.cardId);
  const [userName, setUserName] = useState(currentCard.userName);
  const [date, setDate] = useState(currentCard.date);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleUpdate = (e) => {
    console.log("updated!");
    const cardsWithoutCurrent = cards.filter((card) => card.cardId !== +id);
    e.preventDefault();
    setCards([
      ...cardsWithoutCurrent,
      {
        cardId,
        userName,
        date,
      },
    ]);
  };

  const handleName = (e) => {
    setUserName(e.target.value);
    setIsDisabled(false);
  };
  const handleId = (e) => {
    setCardId(e.target.value);
    setIsDisabled(false);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
    setIsDisabled(false);
  };

  return (
    <>
      <h2>Edit current card</h2>
      {/* CARD COMPONENT */}
      <div className="card">
        <img className="card__brand" src={getBrand(cardId)} alt="brand" />
        <img className="card__chip" src={chip} alt="chip" />
        <span className="card__id">{displayTemp(cardId)}</span>
        <div className="card__info">
          <span className="card__name">{userName}</span>
          <span className="card__date">{date}</span>
        </div>
      </div>
      {/* FORM COMPONENT */}
      <form className="card-form" onSubmit={handleUpdate}>
        <label>Name</label>
        <input value={userName} onChange={handleName} />
        <label>Number</label>
        <div className="card-form__number">
          <input value={cardId} onChange={handleId} />
        </div>
        <label>Expires on</label>
        <input value={date} onChange={handleDate} />
        <button disabled={isDisabled} className="card-form__submit">
          Save
        </button>
      </form>
    </>
  );
};

export default EditCard;
