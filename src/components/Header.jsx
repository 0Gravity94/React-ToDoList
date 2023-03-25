import React from "react";

function Header() {
	return (
		<div data-cy="header">
			<header className="bg-BgBlue w-full h-16 lg:h-24">
				<h1 className="text-white text-lg lg:text-2xl  font-bold pl-5 py-4 lg:pl-56 lg:py-9">To Do List App</h1>
			</header>
		</div>
	);
}

export default Header;
