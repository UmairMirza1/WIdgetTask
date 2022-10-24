import React from "react";

export default function AddButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.count_change(1);
        }}
      >
        {" "}
        Increase
      </button>
    </div>
  );
}
