import React from 'react';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayOut1/BaiTapLayout1';
import BaiTapLayOut2 from './Components/BaiTapLayOut2/BaiTapLayOut2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout1 /> */}
     {/* <BaiTapLayOut2 /> */}
     {/* <DataBinding /> */}
     <HandleEvent />
    </div>
  );
}

export default App;
