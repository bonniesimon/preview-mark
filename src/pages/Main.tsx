import { FC } from 'react'
// Components
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import PreviewBtn from '../components/PreviewBtn';
// Context


const Main: FC = () => {
	return (
		<>
			<div className="flex flex-col lg:flex-row items-stretch md:mx-5 lg:mx-20 mt-32 pb-1">
				<Editor />
				<PreviewBtn />
				<Preview />
			</div>
			<div className="flex flex-row justify-center">
				<button className="px-3 py-2 bg-yellow-400 text-black flex flex-row justify-center items-center">
					Publish
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
				</button>
			</div>
		</>
	)
}

export default Main
