
# Preview-mark

A markdown previewer build using react + typesript.


## Todo

- [x] Create base UI
- [x] Move App.tsx content to Home.tsx and Create pages folder. 
- [x] Add a favicon
- [x] Add context api to move state between Editor and Preview
	- [Context api with react typescript](https://blog.logrocket.com/how-to-use-react-context-with-typescript/)
	- The above blog is shit. I'm trying out a new on. I've written down in developement notes in logseq. Also this link [ContextApi with typescript](https://dev.to/alexander7161/react-context-api-with-typescript-example-j7a)
- [x] Try to figure out a way to pass all the data between Editor, button and Preview

## Learnings

- Configuring a React project using Typescript
- Using typescript for react
- HTML converts multiple newline into a single whitespace. This doesn't allow use to use newline in textarea and use it for the preview since HTML converts the newlines into whitespace. [source](https://stackoverflow.com/questions/29574876/line-breaks-not-working-in-textarea-output)
- Adding custom renderer to *marked*. This was required since tailwind defaults all the heading tags. Used the [docs](https://marked.js.org/using_pro#use) of *marked*.

## Tech Stack

**Client:** React+Typescript, TailwindCSS

<!-- **Server:**  -->

  
## Authors

- [@bonniesimon](https://www.github.com/bonniesimon)

  