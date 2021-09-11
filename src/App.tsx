// Core Libraries
import React, { FC } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Context
import MarkdownProvider from './context/markdownContext';
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
				<MarkdownProvider>
					<Route path="/" exact component={Main} />
					<Route path="/fullscreen-preview" exact component={PreviewFullScreen}/>
				</MarkdownProvider>
			</Switch>
			<Footer/>
		</div>
	</Router>
  );
}

export default App;
