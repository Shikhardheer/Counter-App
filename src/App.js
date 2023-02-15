import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {
  var [counter,counterfun] = useState(0)
  function Increase(){
    if(counter==10) return ;
    counterfun(counter+1)
  }
  function Decrease(){
    if(counter==0) return ;
    counterfun(counter-1)
  }
  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className={(counter>=0 && counter<=4) ? 'color1' : (counter>4 && counter<=9 ? 'color2' : 'color3')}>{counter}</h1>
        <div className='btn'>
          <button onClick={Increase}>Increase</button> <button onClick={Decrease}>Decrease</button>
        </div>
      </div>
      <footer className='footer'>
        Done by Shikhar Dheer Srivastava (12013515)
      </footer>
    </div>
  );
}

export default App;
