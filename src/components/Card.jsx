import React from "react";

const Card = ({ children, fullWidth, additionalClasses }) => {
  console.log(additionalClasses);
  let classes =
    "font-body rounded-xl mx-6 bg-white dark:bg-gray-800 p-6 shadow-md flex flex-col";

  classes += additionalClasses ? additionalClasses : "";

  if (fullWidth === true) {
    classes += " w-full";
    console.log(fullWidth);
  }

  return <div className={classes}>{children}</div>;
};

export default Card;
