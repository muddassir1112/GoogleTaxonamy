import React, { useEffect, useState } from "react";
import data from "./ProductCategories.txt";
export const Products = () => {
  const [Data, setData] = useState([]);
  const [primaryCategory, setPrimaryCategory] = useState([]);
  const [Category1, setCategory1] = useState([]);
  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((data) => {
        setData(data.split("\n"));
        // console.log(data);
      });
    Data.forEach((ele) => {
      if (!ele.includes(">")) {
        primaryCategory.push(ele);
        setPrimaryCategory([...primaryCategory]);
      }
    });
  }, [Data.length]);
  const handleSelect1 = (e) => {
    // console.log(e.target.value);
    // console.log(Data);
    let temp = [];
    // let TEMP = [];
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].includes(e.target.value)) {
        temp = Data[i].split(">");
        
      }
    }
    // for (let i = 0; i < temp.length; i++) {
    //   for (let j = 0; j < temp[i].length-1; j++) {
    //     if(temp[i][j].includes(e.target.value)){
    //      TEMP.push(temp[i][j+1])
    //     }else console.log("No")
    //   }
    // }
    console.log(temp)
    setCategory1([...Category1]);
    // console.log(TEMP)
  };
  return (
    <div className="container">
      <p className="text-lg">Primary Category</p>
      <select className="form-select" onChange={handleSelect1}>
        <option value="--Select--">Open this select menu</option>
        {primaryCategory.map((ele, index) => (
          <option key={index} value={ele}>
            {" "}
            {ele}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
