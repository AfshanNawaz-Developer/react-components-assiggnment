import React from "react";

function Card({ title, description }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
