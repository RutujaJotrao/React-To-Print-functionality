import React from 'react';

const PrintComponent = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const Print = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <PrintComponent />
      
    </div>
  );
});

export default Print;
