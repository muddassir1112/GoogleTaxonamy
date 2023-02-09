import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import data from "./ProductCategories.txt";
export const Products = () => {
  const [Index, setIndex] = useState([]);//state to hold the array
  const [primaryCategory, setPrimaryCategory] = useState([]);
  let arr = [];
  let temp = [];
  let obj = {};
  // useEffect Hook is used to read the text file
  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((data) => {
        // split method is used to split 
        temp = data.split("\n");
        temp.forEach((ele) => {
          arr = ele.split(" > ");
          // function call to create the array of nested objects
          dropDowns(obj, arr);
          setPrimaryCategory([...primaryCategory, obj]);
        });
      });
  }, []);
  // function to create array of nested objects
  const dropDowns = (obj, arr) => {
    for (let i = 0; i < arr.length; i++) {
      obj = obj[arr[i]] = obj[arr[i]] || {};
    }
  };
  // function to select the target value
  const handleSelect = (data, value, index) => {
    if (JSON.stringify(Index).includes(index)) {
      primaryCategory.splice(index + 1, primaryCategory.length - index);
      setPrimaryCategory([...primaryCategory]);
    } else {
      setIndex([...Index, index]);
    }
    setPrimaryCategory([...primaryCategory, data[value]]);
  };

  return (
    <div className="container">
      <p className="text-lg">Primary Category</p>
      {/* conditional rendering of a component */}
      {primaryCategory.length > 0
        ? primaryCategory.map((obj, index) => (
            <Dropdown
              key={index}
              data={obj}
              method={handleSelect}
              index={index}
            />
          ))
        : null}
    </div>
  );
};
