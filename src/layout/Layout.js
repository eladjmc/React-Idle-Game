import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Layout.scss';
import Navbar from '../components/navbar/Navbar';
import Career from '../components/career/Career';  // import the components you want to route to
import Skills from '../components/skills/Skills';  // replace these with your actual component paths
import Market from '../components/market/Market';
import Artifact from '../components/artifact/Artifact';
import Settings from '../components/settings/Settings';
import StatusBar from '../components/StatusBar/StatusBar';

const Layout = () => {
  return (
    <Router>
      <div className='Layout'>
        <StatusBar/>
        <div className='right-game-container'>
          <Navbar />  
            <Routes>
              <Route path='/career' element={<Career />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/market' element={<Market />} />
              <Route path='/roam' element={<Artifact />} />
              <Route path='/artifact' element={<Artifact />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/' element={<Career />} />  {/* default route */}
            </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
