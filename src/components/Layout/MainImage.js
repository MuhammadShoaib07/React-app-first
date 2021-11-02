import React from "react";
import classes from "./MainImage.module.css";
import mealsImage from "../../assets/meals.jpg";
const MainImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="mealsImage" />
    </div>
  );
};

export default MainImage;
