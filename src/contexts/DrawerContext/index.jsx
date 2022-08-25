import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DrawerContext from './drawerContext';

const ActiveDrawerProvider = ({ children }) => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(location.pathname);
  const history = useHistory();

  const handleDrawerOpen = () => setOpen((state) => !state);
  const handleSelect = (path) => {
    setSelected(path);
    history.push(path);
  };

  return (
    <DrawerContext.Provider
      value={{ open, handleDrawerOpen, selected, handleSelect }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default ActiveDrawerProvider;
