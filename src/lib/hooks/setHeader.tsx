import React from "react";

const setHeader = (setStatus: (status: string) => void) => {
  const position = window.scrollY;
  setStatus(position >= 100 ? "row" : "col");
};

export default setHeader;
