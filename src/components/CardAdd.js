import React, { useState } from 'react';
import chip from '../assets/icons/chip.png';
import '../App.css';
import { displayTemp, getBrand, setCardsToStorage, useDebouncedValue } from '../helpers/helpers';
import { Redirect } from 'react-router-dom';

// Page CardAdd
const CardAdd = ({ cards, setCards }) => {
    const [cardId, setCardId] = useState('');
    const [userName, setUserName] = useState('');
    const [date, setDate] = useState('');
    
    const addCard = (e) => {
        e.preventDefault();
        setCards([
            ...cards,
            { 
            cardId,  
            userName, 
            date 
            }
        ]);
        setCardId('');
        setUserName('');
        setDate('');
    };

    const debounced = useDebouncedValue(userName, 400);

    const handleName = e => setUserName(e.target.value);
    const handleId = e => setCardId(e.target.value);
    const handleDate = e => setDate(e.target.value);

    return (
        <div>
            <h2>Add new card</h2>
            {/* CARD COMPONENT */}
            <div className="card">
            <img className="card__brand" src={getBrand(cardId)} alt="chip" />
            <img className="card__chip" src={chip} alt="chip" />
            <span className="card__id">{displayTemp(cardId)}</span>
            <div className="card__info">
                <span className="card__name">{debounced}</span>
                <span className="card__date">{date}</span>
            </div>
            </div>
            {/* FORM COMPONENT */}
            <form className="card-form" onSubmit={addCard}>
                <label>Name</label>
                <input value={userName} onChange={handleName} />
                <label>Number</label>
                <div className="card-form__number">
                    <input value={cardId} onChange={handleId} />
                </div>
                <label>Expires on</label>
                <input value={date} onChange={handleDate} />
                <button className="card-form__submit">Save</button>
            </form>
        </div>
    );
}
  
export default CardAdd;
