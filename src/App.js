import React from "react";
import { useEffect, useState } from "react";

const App = () => {
    const [displayValue, setdisplayValue] = useState("");
  const drumpadArray = [
    {
      keyCode: 3,
      id: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 13,
      id: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 12,
      id: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 16,
      id: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 8,
      id: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 6,
      id: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 9,
      id: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 98,
      id: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 56,
      id: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
        playSound(event.key.toUpperCase());
    })
 }, [])
const playSound = (select) => {
 const myAudio = document.getElementById(select);
 myAudio.play();
 setdisplayValue(select);
}
  return (
    <div>
      <div id="drum-machine">
        <div id="display">{displayValue}</div>
        <div className="row">
          {drumpadArray.map((element) => {
            return (
              <button className="col drum-pad" id="my-drum-pad"  key={element.keyCode} onClick={() => {
                playSound(element.id)}}>
                  <audio
                    className="clip"
                    id={element.id}
                    src={element.src}
                  ></audio>
                  {element.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
