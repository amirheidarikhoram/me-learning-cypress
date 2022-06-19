import { useEffect, useState } from "react";
import { GetTodaysTodos } from "../api/todo";
import Todo from "../components/Todo";
import styles from "./Main.module.scss";

const MainPage = () => {
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		GetTodaysTodos()
			.then((res) => {
				setTodos([...res.data]);
			})
			.catch(() => {
				setError("An error occured");
			});
	}, []);

	return (
		<div className={styles.main}>
			<p>Here we will display today's todos</p>
			{!!error ? (
				error
			) : (
				<div>
					{todos.map((todo) => (
						<Todo {...todo} />
					))}
				</div>
			)}
		</div>
	);
};

export default MainPage;
