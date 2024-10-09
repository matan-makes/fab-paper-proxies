import React from "react";
import ThemeToggle from "./ThemeToggle";

const MainActions = () => {
  return (
    <div className="row-start-1 row-end-4  col-span-full bg-slate-100 dark:bg-slate-800 p-3 rounded-md">
      Main Actions
      <ThemeToggle />
    </div>
  );
};

export default MainActions;
