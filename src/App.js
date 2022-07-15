import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import Menu from "./components/Menu";
import WinGame from "./components/WinGame";

import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Initial cards array
let cardItems = [
  {
    id: "1",
    itemName: "Bean",
    discription: "This is the bean card",
  },
  {
    id: "2",
    itemName: "Banana",
    discription: "This is the banana card",
  },
  {
    id: "3",
    itemName: "Apple",
    description: "This is the apple card",
  },
];

function App() {
  // State which toggles the game render
  const [isToggled, setIsToggled] = useState(false);
  // State which hold cards array
  const [cards, setCards] = useState(cardItems);

  // Function that clears winning card
  const newGame = () => {
    let cleaned = cards.map((item) => {
      // Delete's win data prop
      delete item.win;

      // Returns whats left
      return item;
    });

    // Randomizes the win prop
    const random = Math.floor(Math.random() * cleaned.length);

    // Selects random item in array and adds win prop to that item
    cleaned[random] = {
      ...cleaned[random],
      win: true,
    };

    // Updates cards state
    setCards(cleaned);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>

        <div className="App-body">
          <Routes>
            <Route path="/CurrencyConverter" element={<CurrencyConverter />} />

            <Route
              path="/wingame"
              element={
                <div className="Win-Game">
                  <Button
                    onClick={() => {
                      // When button is clicked it starts a new game
                      newGame();
                      // Shows game
                      setIsToggled(!isToggled);
                    }}
                  >
                    {isToggled ? "QUIT GAME" : "PLAY GAME"}
                  </Button>

                  {isToggled && (
                    <Container>
                      <WinGame
                        cardItems={cards}
                        setIsToggled={setIsToggled}
                        newGame={newGame}
                      />
                    </Container>
                  )}
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
