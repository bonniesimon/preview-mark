// Core Libraries
import React, { FC } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Main from './pages/Main';
import Footer from './components/Footer';
import PreviewFullScreen from './pages/PreviewFullScreen';

const App:FC = () => {
  return (
	<Router>
		<div className="App min-h-screen bg-gray-700">
			<Navbar />
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/fullscreen-preview" exact component={PreviewFullScreen}/>
			</Switch>
			<Footer/>
		</div>
	</Router>
  );
}

export default App;
