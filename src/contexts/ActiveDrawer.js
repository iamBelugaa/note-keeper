import React from 'react';
import { useState, createContext, useContext } from 'react';

const ActiveDrawerContext = createContext({
  open: true,
  handleDrawerOpen: () => {},
  selected: '',
  handleSelect: () => {},
});
export const useActiveDrawer = () => useContext(ActiveDrawerContext);

const ActiveDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState('Notes');

  const handleDrawerOpen = () => setOpen((state) => !state);
  const handleSelect = (text) => setSelected(text);

  return (
    <ActiveDrawerContext.Provider
      value={{ open, handleDrawerOpen, selected, handleSelect }}
    >
      {children}
    </ActiveDrawerContext.Provider>
  );
};

export default ActiveDrawerProvider;
