// Core Libraries
import React, { FC } from 'react';
// Components
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App:FC = () => {
  return (
    <div className="App min-h-screen bg-gray-700">
      <Navbar/>
      <div className="flex flex-row items-stretch h-96 mx-20 mt-32">
        <Editor/>
        <Preview/>
      </div>
    </div>
  );
}

export default App;
