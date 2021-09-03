import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import Shelf from "../../components/Shelf";
import Newsletter from "../../components/Newsletter";

const Home = () => {
	const [products, setProducts] = useState<[]>([]);

	const getProducts = async () => {
		await api.get("products").then((res) => setProducts(res.data));
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Layout>
			<Slider />
			<Shelf productList={products} />
			<Newsletter />
		</Layout>
	);
};

export default Home;
