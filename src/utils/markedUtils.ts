const renderer:any= {
	heading(text: string, level: number){
		// const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
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

export {renderer};