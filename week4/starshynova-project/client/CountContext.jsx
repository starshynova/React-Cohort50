import React, { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
    const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);

  return (
    <CountContext.Provider value={{ countCorrectAnswer, setCountCorrectAnswer, countIncorrectAnswer, setCountIncorrectAnswer }}>
      {children}
    </CountContext.Provider>
  );
};
