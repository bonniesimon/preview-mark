import { useContext } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { MarkdownContext } from "../context/markdownContext";

const Preview: FC = () => {
	const { previewMarkdown } = useContext(MarkdownContext);
	return (
		<div className="w-full min-h-screen mx-5">
			<h1 className="text-gray-300 text-center font-bold my-10">
				Preview
			</h1>
			<div className="bg-gray-600 h-96 p-3 text-gray-100 overflow-y-scroll" dangerouslySetInnerHTML={{ __html: previewMarkdown }}>
			</div>
			<Link to="/fullscreen-preview" className="p-1 my-4 bg-gray-300 hover:bg-gray-400 cursor-pointer w-1/2 mx-auto text-center flex justify-center items-center">
				Fullscreen
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" /></svg>
			</Link>
		</div>
	)
}

export default Preview;
