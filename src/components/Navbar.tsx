import { FC } from "react"
import { Link } from "react-router-dom";

const Navbar:FC = () => {
	return (
		<header className="text-gray-100 body-font">
			<div
				className="container mx-auto flex p-5 flex-row justify-between align-baseline"
			>
				<Link
					className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0"
					to='/'
				>
					{/* <img src="../assets/img/logo.png" alt="" className="w-8" /> */}
					<span className="ml-3 text-2xl">Preview</span>
					<span className="text-2xl text-green-300 bg-black px-1">Mark</span>
				</Link>
				<nav
					className="md:ml-auto flex flex-wrap items-center text-base justify-center"
				>
					<ul className="flex flex-row md:flex-row list-none ml-auto sm:flex-row">
						{/* <li className="nav-item">
							<a
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
								href="/"
							>
								<i className="fab fa-facebook-square text-lg leading-lg opacity-75">
								</i>
								<span className="ml-2">Share</span>
							</a>
						</li> */}
						<li className="nav-item ">
							<a href="https://ctt.ac/5vKHr" target="_blank" rel="noreferrer"
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
							>
								<i className="fab fa-twitter text-lg leading-lg opacity-75"> </i>
								<span className="ml-2 hidden md:inline">Tweet</span>
							</a>
						</li>

						<li className="nav-item">
							<a href="https://github.com/bonniesimon/preview-mark" target="_blank" rel="noreferrer"
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
							>
								<i className="fab fa-github text-lg leading-lg opacity-75"> </i>
								<span className="ml-2 hidden md:inline">Star</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
