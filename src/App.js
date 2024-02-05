import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Print from './Components/Print';

function App() {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
      />
      <Print ref={componentRef} />
    </div>
  );
}

export default App;
