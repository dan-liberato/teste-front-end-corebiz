import React from "react";
import { CartContextProvider } from "./contexts/CartContext";
import Routes from "./routes";

import "./styles/globals.css";

const App = () => {
	return (
		<CartContextProvider>
			<Routes />
		</CartContextProvider>
	);
};
export default App;
