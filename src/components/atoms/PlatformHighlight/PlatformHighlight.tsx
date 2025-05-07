import React from "react";
import PlatformHighlightProps from "./types";

const PlatformHighlight: React.FC<PlatformHighlightProps> = ({
  color,
  children,
}) => {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "10px",
        color: "#fff",
        padding: "10px",
        fontSize: "12px",
        margin: "5px",
      }}
    >
      {children}
    </span>
  );
};

export default PlatformHighlight;
