import React, { useState, useContext } from "react";
import Carousel from "react-elastic-carousel";
import { CartContext } from "../../contexts/CartContext";

import Flag from "../../assets/icons/flag.svg";
import "./styles.css";

interface IProducts {
	productList: Product[];
}

interface Product {
	productId: number;
	productName: string;
	stars: string;
	imageUrl: string;
	listPrice?: number;
	price: number;
	installments: [
		{
			quantity: number;
			value: number;
		}
	];
}

const Shelf = ({ productList }: IProducts) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 2 },
		{ width: 500, itemsToShow: 3 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];
	const products = [...productList];
	const [cart, setCart] = useState<Product[]>([]);
	const [cartItems, setCartItems] = useContext(CartContext);

	const formatValue = (value: number) => {
		let newValue = `${value}`;
		newValue = newValue.replace(/([0-9]{2})$/g, ",$1");
		if (newValue.length > 6)
			newValue = newValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
		return newValue;
	};

	const handleAddToCart = (index: number) => {
		const itemsOncart: any = [...cart, cart.push(products[index])];

		setCart(itemsOncart);
		setCartItems(itemsOncart);
		localStorage.setItem(`cart`, JSON.stringify(cartItems));
	};

	return (
		<div className="container__shelf">
			<section className="shelf">
				<h2 className="shelf__title title">Mais Vendidos</h2>

				<div className="shelf__content">
					<Carousel
						isRTL={false}
						pagination={true}
						breakPoints={breakPoints}
					>
						{products.map((product, index: number) => (
							<article
								key={Number(index)}
								className="shelf--product"
							>
								<div className="shelf--product__header flexColCenter">
									<img
										className="shelf--product__image"
										src={product.imageUrl}
										alt={product.productName}
									/>
									{product.listPrice && (
										<img
											className="shelf--product__flag"
											src={Flag}
											alt="Off"
										/>
									)}
								</div>

								<div className="shelf--product__footer flexColCenter">
									<h2 className="shelf--product__title">
										{product.productName}
									</h2>
									<div className="shelf--product__rating">
										{product.stars}
									</div>
									<div className="shelf--product__list-price">
										<span>
											{product.listPrice &&
												`de R$	${formatValue(
													product.listPrice
												)}`}
										</span>
									</div>
									<div className="shelf--product__price">
										<span>por</span>
										<span>
											R$ {formatValue(product.price)}
										</span>
									</div>
									<div className="shelf--product__installments">
										{product.installments &&
											product.installments.map(
												(item) =>
													` ou em 9x de R$
											${formatValue(item.value)}`
											)}
									</div>
									<button
										onClick={() => handleAddToCart(index)}
										className="btn-primary add-to-cart"
									>
										Comprar
									</button>
								</div>
							</article>
						))}
					</Carousel>
				</div>
			</section>
		</div>
	);
};

export default Shelf;
