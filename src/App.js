
import "../src/App.css";
import LuckySpin from './Components/LuckySpin'

import { HashRouter, Route, Routes } from 'react-router-dom';
import Maincomponents from './Components/Maincomponents';
import { Routingdata } from './Components/Routingdata';


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path={Routingdata.MAINPAGE} element={<Maincomponents />} />
      <Route path={Routingdata.LUCKYSPIN} element={<LuckySpin />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
