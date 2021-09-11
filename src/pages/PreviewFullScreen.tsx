import { FC, useContext } from 'react';
// Context
import { MarkdownContext } from '../context/markdownContext';
// Components
import Preview from "../components/Preview"

const PreviewFullScreen: FC = () => {
	const {previewMarkdown} = useContext(MarkdownContext);
	return (
		<div className="mx-auto max-w-screen-xl w-3/4 min-h-screen">
			<h1 className="text-gray-300 text-center font-bold my-10">
				Preview
			</h1>
			<div className="bg-gray-600 min-h-screen p-5 text-gray-100" dangerouslySetInnerHTML={{ __html: previewMarkdown }}>
			</div>
		</div>
	)
}

export default PreviewFullScreen
