import React from "react";
import { useState } from "react";
import "../App.css";
import MeloncholicIcon from "../utility/melancholic.png";
function EmotionModalMelancholic() {
  return (
    <div className="modal-wrapper-melancholic">
      <img
        className="melancholic"
        src={MeloncholicIcon}
        alt="Melancholic Icon in dark blue"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>MELANCHOLIC</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea a,
        eligendi cupiditate odio quam dolorum? Laudantium iste consequatur
        consequuntur vel earum pariatur culpa nemo, eum blanditiis odio mollitia
        eius! Nostrum corrupti placeat facilis nobis voluptas beatae molestiae,
        iure pariatur velit accusantium quia fugiat magni voluptatem tenetur
        ipsa consequatur eaque eos nam quae amet expedita quam. Fugiat officiis
        voluptatibus odit. Sunt veniam tempore rem deleniti, voluptate nobis
      </p>
    </div>
  );
}
export default EmotionModalMelancholic;
