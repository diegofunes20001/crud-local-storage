import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomAlert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {message}
    </div>
  );
};

export default CustomAlert;