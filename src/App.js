import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardAdd from './components/CardAdd';
import CardsList from './components/CardsList';
import EditCard from './components/EditCard';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      userName: "Veljko",
      cardId: 5555444433332222,
      date: 22/11
    }
  ]);

  // useEffect(() => {
  //   setCardsToStorage([cards])
  //   const cardsFromStorage = getCardsFromStorage();
  //   setCards(cardsFromStorage);
  //   console.log(cardsFromStorage);
  // }, []);
  
  const AppRouter = () => (
    <Router>
          <Switch>
            <Route path="/cards/add" render={() => <CardAdd cards={cards} setCards={setCards} />} />
            <Route path="/cards/:id/edit" render={() => <EditCard cards={cards} setCards={setCards} />} />
            <Route path="/cards" render={() => <CardsList cards={cards} setCards={setCards} />} />
            <Route path="/*" render={() => <CardsList cards={cards} setCards={setCards} />} />
          </Switch>
      </Router>
  )

  return (<AppRouter />);
}

export default App;
