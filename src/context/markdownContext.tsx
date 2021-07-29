import { createContext, useState } from "react";
import marked from 'marked';

type Props ={
	children:React.ReactNode
}

interface IMarkdownContext {
	editorMarkdown: string;
	setEditorMarkdownHandle: (e: any) => void;
	previewMarkdown: string;
	setPreviewMarkdownHandle: (markdown: string) => void;
}

const MarkdownContextDefault: IMarkdownContext = {
	editorMarkdown: "",
	setEditorMarkdownHandle: () => {},
	previewMarkdown: "This is the preview side",
	setPreviewMarkdownHandle: () => {}
}

const MarkdownContext = createContext<IMarkdownContext>(MarkdownContextDefault);

const MarkdownProvider = ({children}: any): any => {
	const [editorMarkdown,setEditorMarkdown] = useState<string>('');

	const setEditorMarkdownHandle = (e : any) => {
		setEditorMarkdown(e.target.value);
	}
	
	const [previewMarkdown, setPreviewMarkdown] = useState<string>('This is preview side');
	
	const setPreviewMarkdownHandle = (markdown: string) => {
		// let modifiedStringWithBrTag = markdown.replace(/\n/g, "<br>");
		let markdownConvertedString = marked(markdown);
		setPreviewMarkdown(markdownConvertedString);
	}

	return(
		<MarkdownContext.Provider value={{editorMarkdown,setEditorMarkdownHandle,previewMarkdown, setPreviewMarkdownHandle}}>
			{children}
		</MarkdownContext.Provider>
	)
}

export default MarkdownProvider;
export {MarkdownContext};