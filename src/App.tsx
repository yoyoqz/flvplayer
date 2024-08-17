import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import FLVPlayer from './FLVPlayer'
import PlayerList from './PlayerList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FLVPlayer />} />
      <Route path="/list" element={<PlayerList />} />
    </Routes>    
  );
}

export default App;
/*
      <div style="width: 100%; height: 800px; display: flex; flex-flow:row wrap;">
      <FLVPlayer></FLVPlayer>
      <FLVPlayer></FLVPlayer>
      <FLVPlayer></FLVPlayer>
      </div>

*/
//url="ws://175.178.22.100:8080/rtp/0BEBC203.live.flv"
