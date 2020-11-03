import React from "react";
import spinner from "../../img/spinner.gif";

// eslint-disable-next-line
export default () => (
  <>
    <img
      src={spinner}
      style={{
        display: "block",
        width: "200px",
        margin: "auto",
      }}
      alt="Loading..."
    />
  </>
);
