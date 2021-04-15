import React from "react";

const Card = ({ children, fullWidth, additionalClasses }) => {
  let classes =
    "font-body sm:rounded-xl rounded-none bg-white dark:bg-gray-800 sm:p-6 p-0 shadow-md flex flex-col";

  classes += additionalClasses ? " " + additionalClasses : "";

  if (fullWidth === true) {
    classes += " w-full";
  }

  return <div className={classes}>{children}</div>;
};

export default Card;
