import { createContext, useState } from "react";
import marked, { MarkedExtension } from 'marked';

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
		const renderer:any= {
			heading(text: string, level: number){
				const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
				let headingSizeTailwind: string = 'base';
				const hrTag: string = level === 1 ? '<hr class="p-3"/>' : '';
				switch(level){
					case 1:
						headingSizeTailwind = '3xl py-2'
						break;
					case 2:
						headingSizeTailwind = '2xl';
						break;
					case 3:
						headingSizeTailwind = 'xl';
						break;
					case 4:
						headingSizeTailwind = 'lg';
						break;
					case 5:
						headingSizeTailwind = 'base';
						break;
				}	
				return `
					<h${level} class="text-${headingSizeTailwind}">
						${text}
					</h${level}>
					${hrTag}
				`;
			},
			list(body: string, ordered: boolean){
				const listStyleTypeTailwind: string = ordered? 'decimal': 'disc';
				return `
					<ul class="list-${listStyleTypeTailwind} px-4">
						${body}
					</ul>
				`
			}
		};
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