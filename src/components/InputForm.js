import React, { useState } from "react";
import Button from "./Button";

function InputForm() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Hello, ${name || "Guest"}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "200px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default InputForm;
