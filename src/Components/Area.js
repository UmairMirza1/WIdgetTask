import React from "react";

export default function Area(props) {
  return (
    <>
      <div className="Area">
        {Array(props.count)
          .fill(0)
          .map(() => {
            return <img src={props.image} alt=" "></img>;
          })}
      </div>
    </>
  );
}
