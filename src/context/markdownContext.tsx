import { createContext, useState } from "react";

type Props ={
	children:React.ReactNode
}

interface IMarkdownContext {
	editorMarkdown: string;
	setEditorMarkdownHandle: (e: any) => void;
	previewMarkdown: string;
	setPreviewEditor: (markdown: string) => void;
}

const MarkdownContextDefault: IMarkdownContext = {
	editorMarkdown: "",
	setEditorMarkdownHandle: () => {},
	previewMarkdown: "",
	setPreviewEditor: () => {}
}

const MarkdownContext = createContext<IMarkdownContext>(MarkdownContextDefault);

const MarkdownProvider = ({children}: any): any => {
	const [editorMarkdown,setEditorMarkdown] = useState<string>('');

	const setEditorMarkdownHandle = (e : any) => {
		setEditorMarkdown(e.target.value);
	}

	const [previewMarkdown, setPreviewEditor] = useState<string>('');

	const setPreviewEditorHandle = (markdown: string) => {
		setPreviewEditor(markdown);
	}

	return(
		<MarkdownContext.Provider value={{editorMarkdown,setEditorMarkdownHandle,previewMarkdown, setPreviewEditor}}>
			{children}
		</MarkdownContext.Provider>
	)
}

export default MarkdownProvider;
export {MarkdownContext};