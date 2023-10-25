import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
