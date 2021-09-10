import { createContext, useState, useEffect } from "react";
import marked, { MarkedExtension } from 'marked';
// Helper Functions
import {renderer} from './../utils/markedUtils';

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
	const [previewMarkdown, setPreviewMarkdown] = useState<string>('This is preview side');
	useEffect(() => {
		const editorMarkdownLocalStorage = localStorage.getItem('editorMarkdown');
		if(editorMarkdownLocalStorage){
			setEditorMarkdown(editorMarkdownLocalStorage);
		}	
	}, [])

	const setEditorMarkdownHandle = (e : any) => {
		localStorage.setItem('editorMarkdown', e.target.value);
		setEditorMarkdown(e.target.value);
	}
	
	
	const setPreviewMarkdownHandle = (markdown: string) => {
		// let modifiedStringWithBrTag = markdown.replace(/\n/g, "<br>");

		// Saving item to localStorage.
		localStorage.setItem('editorMarkdown', markdown);
		marked.use({renderer});
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