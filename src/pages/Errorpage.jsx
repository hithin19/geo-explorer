import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import "./e.css"
export const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1 className="error-heading">!!oops an error occured </h1>

      {error && (
        <div className="error-details">
          <p className="error-message">
            <strong>Error Message:</strong> {error.data || error.message}
          </p>
          <p className="error-status">
            <strong>Status:</strong> {error.status}
          </p>
          <NavLink
            to="/"
            className="back-button"
          >
            go back
          </NavLink>
        </div>
      )}
    </div>
  );
};
