import { ReactElement} from "react";
import { FC, createContext, useState } from "react";

type Props ={
	children:React.ReactNode
}

const markdownContext = createContext(null);

const MarkdownProvider = ({children}: Props): any => {
	const [markdown,setMarkdown] = useState<string>('');
		const setMarkdownHandle = (e : any) => {
		setMarkdown(e.target.value);
	}
	return(
		{children}
	)
}

export default MarkdownProvider;
export {markdownContext};