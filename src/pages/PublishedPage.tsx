import { FC, useEffect, useState } from "react"

const PublishedPage:FC = ({match}: any) => {
	const [htmlContent, setHtmlContent] = useState('');

	const fetchPage = async (apiUrl: string) => {
		const res = await fetch(apiUrl);
		const json = await res.json();
		setHtmlContent(json.markdown);
	}
	useEffect(() => {
		const pageId:string = match.params.id;
		const apiUrl: string = `https://f80l28.deta.dev/pages/${pageId}`;
		fetchPage(apiUrl);
	}, [])
	return (
		<>
			<div className="mx-auto max-w-screen-xl w-3/4 min-h-screen">
				<h1 className="text-gray-300 text-center font-bold my-10">
					Shared Page
				</h1>
				<div className="bg-gray-600 min-h-screen p-5 text-gray-100" dangerouslySetInnerHTML={{ __html: htmlContent}}>
				</div>
			</div>
		</>
	)
}
export default PublishedPage