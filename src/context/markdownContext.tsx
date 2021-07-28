import { createContext, useState } from "react";

type Props ={
	children:React.ReactNode
}

interface IMarkdownContext {
	markdown: string;
	setMarkdownHandle: (e: any) => void;
}

const MarkdownContextDefault: IMarkdownContext = {
	markdown: "",
	setMarkdownHandle: () => {}
}

const MarkdownContext = createContext<IMarkdownContext>(MarkdownContextDefault);

const MarkdownProvider = ({children}: any): any => {
	const [markdown,setMarkdown] = useState<string>('');

	const setMarkdownHandle = (e : any) => {
		setMarkdown(e.target.value);
	}

	return(
		<MarkdownContext.Provider value={{markdown, setMarkdownHandle}}>
			{children}
		</MarkdownContext.Provider>
	)
}

export default MarkdownProvider;
export {MarkdownContext};