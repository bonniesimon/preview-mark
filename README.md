
# Preview-mark

A markdown previewer build using react + typesript.  
**Work in progress 👷**
## Learnings

- Configuring a React project using Typescript
- Using typescript for react
- Using TailwindCSS to create UI's.
- HTML converts multiple newline into a single whitespace. This doesn't allow use to use newline in textarea and use it for the preview since HTML converts the newlines into whitespace. [source](https://stackoverflow.com/questions/29574876/line-breaks-not-working-in-textarea-output)
- Adding custom renderer to *marked*. This was required since tailwind defaults all the heading tags. Used the [docs](https://marked.js.org/using_pro#use) of *marked*.
- Using localStorage to persist browser state
- Solved the gh-pages issue with react-router using [source](https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819)
- Learned about the usecase of HashRouter. And the incompetence of react to route and creating confusion between server side and client side routing.

## Tech Stack

**Client:** React+Typescript, TailwindCSS
**API:** Deta Micro

<!-- **Server:**  -->

  
## Authors

- [@bonniesimon](https://www.github.com/bonniesimon)

  