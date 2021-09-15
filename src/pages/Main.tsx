import { FC } from 'react'
// Components
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import PreviewBtn from '../components/PreviewBtn';
import PublishBtn from '../components/PublishBtn';
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
				<PublishBtn/>	
			</div>
		</>
	)
}

export default Main
