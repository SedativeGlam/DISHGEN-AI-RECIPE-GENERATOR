import React from "react";

export default function Button({ variant, children }) {
  const buttonClass = `btn ${variant ? `${variant}-btn` : ""}`;

  return (
    <div>
      <button className={buttonClass}>{children}</button>
    </div>
  );
}
