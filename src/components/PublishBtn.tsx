import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router";
import { MarkdownContext } from "../context/markdownContext";
import ReactTooltip from "react-tooltip";

// interface IApiOptions{
// 	method: string;
// 	headers: {
// 		string: string;
// 	}
// }


const PublishBtn = () => {
	const {previewMarkdown} = useContext(MarkdownContext);
	const history = useHistory();

	const postData = async (markdown: string, date: string) => {
		// const apiUrl:string = 'http://localhost:3001/publish-page';
		const apiUrl:string = 'https://f80l28.deta.dev/publish-page';
		const reqBody = {
			markdown,
			date
		}
		const apiOptions = {
			method: "POST", 
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(reqBody),
		}
		const res = await fetch(apiUrl, apiOptions);
		const json = await res.json();	
		return json;
	}

	const handlePublishClick = async () => {
		const todayDate = new Date(Date.now()).toLocaleDateString();
		const res = await postData(previewMarkdown, todayDate);
		const redirectUrl: string = "/pages/" + res.key;
		history.push(redirectUrl);
	}
	return (
		<React.Fragment>
			<button onClick={handlePublishClick} className="px-3 py-2 bg-yellow-400 text-black flex flex-row justify-center items-center" 
				data-tip="Click to publish your markdown" data-place="bottom">
				Publish
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
			</button>
			<ReactTooltip />
		</React.Fragment>
	)
};

export default PublishBtn;
