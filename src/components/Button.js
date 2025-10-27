import React from "react";
function Button({text, onClick }){
    return(
        <button  style={{
        backgroundColor: "skyblue",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      onClick={onClick}>
          {text}


        </button>

    );
}

export default Button;