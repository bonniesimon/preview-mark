// Core Libraries
import React, { FC } from 'react';
// Components
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Main from './pages/Main';

const App:FC = () => {
  return (
    <div className="App min-h-screen bg-gray-700">
        <Main/>
    </div>
  );
}

export default App;
