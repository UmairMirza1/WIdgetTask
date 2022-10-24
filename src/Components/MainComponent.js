import React, { Component, useState } from "react";
import DecButton from "./DecButton";
import AddButton from "./AddButton";
import Widget from "./Widget";
import Area from "./Area";
import "./style.css";

export default function MainComponent(props) {
  const [count, setCount] = useState(0);
  const change_count = function (c) {
    console.log("ddd", count);
    console.log("eee", c);
    if (c == 1 || count > 0) {
      setCount(count + c);
    }
  };

  return (
    <>
      <div className="MainDiv">
        <Widget image={props.image} />
        <div className="SecondDiv">
          <AddButton count_change={change_count}> </AddButton>
          <DecButton count_change={change_count}> </DecButton>
        </div>
        <Area image={props.image} count={count}></Area>
      </div>
    </>
  );
}
