import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DrawerContext from './drawerContext';

const ActiveDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState('Notes');
  const history = useHistory();

  const handleDrawerOpen = () => setOpen((state) => !state);
  const handleSelect = (text, path) => {
    setSelected(text);
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
