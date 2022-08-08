import { createContext, useContext } from 'react';

const DrawerContext = createContext({
  open: true,
  handleDrawerOpen: () => {},
  selected: '',
  handleSelect: () => {},
});

export const useActiveDrawer = () => useContext(DrawerContext);
export default DrawerContext;
