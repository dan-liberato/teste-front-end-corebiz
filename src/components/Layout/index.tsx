import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

import "./Layout.module.css";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="container">
			<Header />
			<main className="main">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
