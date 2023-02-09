import React from "react";

export const Dropdown = ({ data, method, index }) => {
  return (
    <>
      {/* check whether the passed object has keys  */}
      {Object.keys(data).length > 0 ? (
        <select
          className="form-select mb-2"
          onChange={(e) => {
            method(data, e.target.value, index);
          }}
        >
          <option value="--Open this select menu--" selected disabled>
            --Open this select menu--
          </option>
          {/* map method to print the objects */}
          {Object.keys(data).map((ele, index) => (
            <option key={index} value={ele}>
              {" "}
              {ele}{" "}
            </option>
          ))}
        </select>
      ) : null}
    </>
  );
};
