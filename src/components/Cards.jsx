import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  // State for adding className flipped
  const [flipped, setFlipped] = useState(false);

  // Handling click
  const handleClick = () => {
    //
    setFlipped(!flipped);
    if (props.onClick) {
      props.onClick(props);
    }
  };

  return (
    <div className="card-wrapper">
      <Card
        className={`front ${flipped ? "f-flipped" : ""}`}
        onClick={handleClick}
      >
        <Card.Body>
          <Card.Title style={{ color: "#000" }}></Card.Title>
          <Card.Text
            style={{ minHeight: "100px", minWidth: "100px", color: "#000" }}
          >
            {props.itemName}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className={`back ${flipped ? "b-flipped" : ""}`}
        onClick={handleClick}
      >
        <Card.Body>
          <Card.Title style={{ color: "#000" }}></Card.Title>
          <Card.Text
            style={{ minHeight: "100px", minWidth: "100px", color: "#000" }}
          ></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
