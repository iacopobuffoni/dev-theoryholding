import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const value = {
    posts,
    setPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
