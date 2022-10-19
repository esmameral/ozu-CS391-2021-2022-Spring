import React, { useState } from "react";
import { Button } from 'reactstrap';
export default function ApplyJobButton() {
  const [buttonText, setButtonText] = useState("Apply");

  return (
    <Button onClick={() => setButtonText("Applied")}
      color="primary"
      outline
    >
      {buttonText}
    </Button>
  );
}