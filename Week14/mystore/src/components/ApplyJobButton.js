import React, { useState } from "react";

export default function ApplyJobButton() {
  const [buttonText, setButtonText] = useState("Apply");

  return (
    <button onClick={() => setButtonText("Applied")}>
      {buttonText}
    </button>
  );
}