import AppDrawer from '../components/Drawer/AppDrawer';

const Layout = ({ children }) => {
  return (
    <div>
      <AppDrawer />
      {children}
    </div>
  );
};

export default Layout;
