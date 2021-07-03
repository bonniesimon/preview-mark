import { ReactNode } from "react";
import { FC, createContext, useState } from "react";

type Props ={
	children:ReactNode
}

const markdownContext = createContext(null);

const MarkdownProvider= ({children}:Props) => {
	const [markdown,setMarkdown] = useState<string>('');
	const setMarkdownHandle = () => {
		
	}
	return(
		{children}
	)
}

export default MarkdownProvider;