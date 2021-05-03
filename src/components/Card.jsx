import React from "react";

const Card = ({ children, fullWidth, additionalClasses }) => {
  let classes =
    "card-component font-body rounded-xl bg-gray-50 dark:bg-gray-800 sm:p-8 p-4 shadow-md flex flex-col ";

  classes += additionalClasses ? " " + additionalClasses : "";

  if (fullWidth === true) {
    classes += " w-full";
  }

  return <div className={classes}>{children}</div>;
};

export default Card;
