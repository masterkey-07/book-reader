import React from "react";
import { useNavigate } from "react-router-dom";

const Title = ({ title }) => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => {
        navigate(title.includes("Leitor") ? "/" : title);
      }}
    >
      {title}
    </span>
  );
};

export default Title;
