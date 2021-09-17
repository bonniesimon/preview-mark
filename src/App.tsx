// Core Libraries
import React, { FC } from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
// Context
import MarkdownProvider from './context/markdownContext';
// Components
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import PreviewFullScreen from './pages/PreviewFullScreen';
import PublishedPage from './pages/PublishedPage';

const App:FC = () => {
  return (
	<HashRouter basename={process.env.PUBLIC_URL}>
		<div className="App min-h-screen bg-gray-700">
			<Navbar />
			<Switch>
				<MarkdownProvider>
					<Route path="/" exact component={Main} />
					<Route path="/fullscreen-preview" exact component={PreviewFullScreen}/>
					<Route path="/pages/:id" component={PublishedPage}/>
				</MarkdownProvider>
			</Switch>
			<Footer/>
		</div>
	</HashRouter>
  );
}

export default App;
