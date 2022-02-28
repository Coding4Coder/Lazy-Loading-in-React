
import './App.scss';
import TopNavBar from './Components/TopNavBar';
import {Route, Routes, BrowserRouter} from "react-router-dom";

import Home from './Pages/Home';
import React, { Suspense } from 'react';
import LoadingSpiner from './Components/LoadingSpiner';

const Signup = React.lazy(() => import('./Pages/Signup'));

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <TopNavBar />

        <Suspense fallback={
          <div className="txt-center">
             <LoadingSpiner />
          </div>
        }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home.html" element={<Home />} />
        <Route path="/signup.html" element={<Signup />} />
      </Routes>
  </Suspense>

      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
