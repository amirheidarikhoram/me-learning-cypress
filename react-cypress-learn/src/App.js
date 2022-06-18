import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import TodosPage from "./pages/todos";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/todos" element={<TodosPage />} />
			</Routes>
		</div>
	);
}

export default App;
