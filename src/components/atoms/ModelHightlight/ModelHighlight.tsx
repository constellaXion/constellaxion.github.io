import React from "react";
import ModelHighlightProps from "./types";

const ModelHighlight: React.FC<ModelHighlightProps> = ({ children }) => {
  return (
    <span
      style={{
        backgroundColor: "#DDDFE6",
        borderRadius: "10px",
        color: "#000",
        padding: "10px",
        fontSize: "12px",
        margin: "5px",
      }}
    >
      {children}
    </span>
  );
};

export default ModelHighlight;
