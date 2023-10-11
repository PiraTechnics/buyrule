import { useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Item />
			<Item></Item>
		</>
	);
}

export default App;
