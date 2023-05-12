import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AgridPage from './pages/agrid';
import MissionPage from './pages/mission';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<AgridPage />} />
          <Route path="/mission" element={<MissionPage />} />
       </Routes>
    </>
 );
};

export default App;