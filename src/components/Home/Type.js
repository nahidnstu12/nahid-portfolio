import React from "react";
import Typewriter from "typewriter-effect";
import {typeString} from "../../data/home";

function Type() {
  return (
    <Typewriter
      options={{
        strings: typeString,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
