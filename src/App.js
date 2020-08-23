import React from 'react';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayOut1/BaiTapLayout1';
import BaiTapLayOut2 from './Components/BaiTapLayOut2/BaiTapLayOut2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout1 /> */}
     {/* <BaiTapLayOut2 /> */}
     {/* <DataBinding /> */}
     {/* <HandleEvent /> */}
     {/* <Styling /> */}
     {/* <RenderWithState /> */}
     {/* <BaiTapChonXe /> */}
     <RenderWithMap />
    </div>
  );
}

export default App;
