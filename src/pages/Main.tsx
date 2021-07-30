import React from 'react'
import { FC } from 'react'
// Components
import Navbar from '../components/Navbar';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import PreviewBtn from '../components/PreviewBtn';
// Context
import { MarkdownContext } from '../context/markdownContext';
import MarkdownProvider from '../context/markdownContext';


const Main: FC = () => {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col lg:flex-row items-stretch mx-20 mt-32 pb-32">
				<MarkdownProvider>
					<Editor />
					<PreviewBtn/>	
					<Preview />
				</MarkdownProvider>
			</div>
		</div>
	)
}

export default Main
