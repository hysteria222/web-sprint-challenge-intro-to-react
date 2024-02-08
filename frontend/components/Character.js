import React, { useState, useEffect } from "react";
function Character(props) {
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [homeWorld, setHomeWorld] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const handleClick = () => {
    if (homeWorld != true) {
      setHomeWorld(true);
    } else if (homeWorld === true) {
      setHomeWorld(false);
    }
  };

  return (
    <div onClick={handleClick} className="character-card">
      <h3 className="character-name">{props.name}</h3>
      <p>
        {homeWorld ? (
          <>
            Planet:{" "}
            <span className="character-planet">{props.homeworld.name}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}

export default Character;
