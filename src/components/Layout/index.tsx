import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="container">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
