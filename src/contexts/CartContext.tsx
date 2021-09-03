import React, { useState, ReactNode } from "react";

export const CartContext = React.createContext([]);

type CartContextProviderProps = {
	children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cartItems, setCartItems] = useState([]);

	return (
		<CartContext.Provider value={[cartItems, setCartItems]}>
			{children}
		</CartContext.Provider>
	);
};
