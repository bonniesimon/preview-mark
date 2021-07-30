import { useContext } from "react";
import { FC } from "react";
import { MarkdownContext } from "../context/markdownContext";

const Preview:FC = () => {
	const {previewMarkdown} = useContext(MarkdownContext);
	return (
		<div className="w-full mx-5">
			<h1 className="text-gray-300 text-center font-bold my-10">Preview</h1>
			<div className="bg-gray-600 h-96 p-3 text-gray-100" dangerouslySetInnerHTML={{__html:previewMarkdown}}>
			</div>
		</div>
	)
}

export default Preview;
