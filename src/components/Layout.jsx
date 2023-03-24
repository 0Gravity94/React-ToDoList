import React from "react";

function Layout({ children }) {
	return (
		<div>
			{/* <NavBar/> */}
			<div className="w-full h-full">{children}</div>
		</div>
	);
}

export default Layout;
