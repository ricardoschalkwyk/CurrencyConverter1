import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import ModalAlert from "./ModalAlert";
import PopOverInfo from "./PopOverInfo";

function WinGame({ cardItems, setIsToggled, newGame }) {
  // States Shows and Hides modal
  const [show, setShow] = useState(false);
  // State which shows win/lose content
  const [userWon, setUserWon] = useState(false);

  // State for refreshing when New game is clicked
  const [refresh, setRefresh] = useState(false);

  // State which changes show/hide
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSuccess = () => {
    newGame();
    setRefresh(true);
  };

  const handleReject = () => setIsToggled(false);

  // Determines which card is correct
  const cardClicked = (item) => {
    setUserWon(item.win ? true : false);
    setShow(true);
  };

  // Listens for the refresh State
  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <Container>
      <div>
        <ModalAlert
          show={show}
          title={userWon ? "You WON!" : "You LOST!"}
          modalText={
            userWon ? "You're would you like to try again?!" : "Try again...?"
          }
          handleClose={handleClose}
          handleShow={handleShow}
          handleReject={handleReject}
          handleSuccess={handleSuccess}
        />

        {/* Popover for more info */}
        <PopOverInfo />

        <h1 style={{ marginBottom: "10px" }}>
          Pick the <strong>Bean</strong> card
        </h1>
      </div>

      {!refresh && (
        <div className="d-flex justify-content-between gap-4">
          {/* Loop for displaying cards */}
          {cardItems.map((item) => (
            <Cards key={item.id} {...item} onClick={cardClicked} />
          ))}
        </div>
      )}
    </Container>
  );
}

export default WinGame;
