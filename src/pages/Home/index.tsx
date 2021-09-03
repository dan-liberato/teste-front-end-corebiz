import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import Shelf from "../../components/Shelf";
import Newsletter from "../../components/Newsletter";
import Loader from "../../components/Loader";

const Home = () => {
	const [products, setProducts] = useState<[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getProducts = async () => {
		try {
			setIsLoading(true);
			await api.get("products").then((res) => setProducts(res.data));
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Layout>
			<Slider />
			{isLoading && <Loader />}
			{!isLoading && <Shelf productList={products} />}
			<Newsletter />
		</Layout>
	);
};

export default Home;
