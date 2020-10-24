import React from 'react';
import { Link } from "react-router-dom";
import chip from '../assets/icons/chip.png';
import '../App.css';
import { displayTemp, getBrand, navigateTo } from '../helpers/helpers';
  
// Page CardsList
const CardsList = ({ cards }) => (
    <div className="cards">
        <h2 className="title">My cards</h2>
        {cards !== [] ? cards.map(item => (
            <Link key={item.cardId} to={navigateTo(item.cardId)}>
                <div className="card">
                    <img className="card__brand" src={getBrand(item.cardId)} alt="brand" />
                    <img className="card__chip" src={chip} alt="chip" />
                    <span className="card__id">
                    {displayTemp(item.cardId)}
                    </span>
                    <div className="card__info">
                    {item.userName && <span className="card__name">{item.userName}</span>}
                    {item.date && <span className="card__date">{item.date}</span>}
                    </div>
                </div>
            </Link>
        )) : <h2 className="title">Connect card to app please...</h2>}
        <Link to="/cards/add">
            <button className="add-btn cross"></button>
        </Link>
    </div>
);

export default CardsList;
