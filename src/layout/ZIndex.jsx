const ZIndex = ({ children }) => {
  return (
    <div style={{ zIndex: 100000000000000, marginTop: '80px' }}>{children}</div>
  );
};

export default ZIndex;
