import { FC, useContext } from "react"

import { MarkdownContext } from "../context/markdownContext";

const Editor: FC = () => {
	const {setEditorMarkdownHandle, editorMarkdown} = useContext(MarkdownContext);
	return (
		<div className="w-full mx-5">
			<label className="block text-gray-300 text-center font-bold my-10" htmlFor="message">Enter Markdown</label>
			<textarea value={editorMarkdown} onChange={setEditorMarkdownHandle} name="feedback" id="feedback"
					className="border-0 px-3 py-3 bg-gray-600 placeholder-black text-gray-50 rounded shadow focus:outline-none w-full h-96"
					placeholder="" required />
		</div>
	)
}

export default Editor
