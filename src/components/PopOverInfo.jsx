import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function PopOverInfo() {
  return (
    <div>
      <>
        <OverlayTrigger
          overlay={
            <Tooltip>
              <h5>
                <strong>
                  Click on one of the cards.
                  <br />
                  <br />
                  You are looking for the card called bean.
                  <br />
                  <br />
                  To start please click new game.
                </strong>
              </h5>
            </Tooltip>
          }
        >
          <Button variant="secondary">How to play</Button>
        </OverlayTrigger>
      </>
    </div>
  );
}

export default PopOverInfo;
