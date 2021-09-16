import { useEffect, useState } from "react"

const PublishedPage = ({match}: any) => {
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
		<div>
			<h2>Welcome to publish page</h2>	
		</div>
	)
}
export default PublishedPage