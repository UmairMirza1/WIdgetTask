import React from "react";

export default function DecButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.count_change(-1);
        }}
      >
        {" "}
        Decrease
      </button>
    </div>
  );
}
