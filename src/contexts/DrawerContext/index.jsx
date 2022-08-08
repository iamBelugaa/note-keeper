import { useState } from 'react';
import DrawerContext from './drawerContext';

const ActiveDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState('Notes');

  const handleDrawerOpen = () => setOpen((state) => !state);
  const handleSelect = (text) => setSelected(text);

  return (
    <DrawerContext.Provider
      value={{ open, handleDrawerOpen, selected, handleSelect }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default ActiveDrawerProvider;
