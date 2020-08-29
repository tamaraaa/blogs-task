import React, {useEffect} from 'react';
import {getBlogsStart} from './redux/actions';
import './App.css';

function App() {

  useEffect(()=>{
    getBlogsStart();
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
