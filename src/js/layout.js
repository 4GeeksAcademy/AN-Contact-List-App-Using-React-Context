import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddContact } from "./views/AddContact";
import { Contact } from "./views/Contact";

// create your first component
const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<h1>ds</h1>} /> {/* Use capitalized 'Home' */}
					<Route path="/addcontact" element={<AddContact />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout; // 'injectContext' removed, unless it's required for state management
