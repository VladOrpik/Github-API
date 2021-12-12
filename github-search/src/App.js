import React from 'react';
import MainPage from './Components/MainPage';
import {Routes, Route , Link, Navigate} from 'react-router-dom';
import RepoInfo from './Components/RepoInfo';

function App() {
 return (
  <div>
    <Routes>
      <Route path="/*"  element={<Navigate to ="/" />}/>
      <Route path="/"  element={<MainPage/>}/>
      <Route  path="/repo/:id"  element={<RepoInfo/>} />
    </Routes>
    
  
  </div>
 )
    
  
}
export default App;
